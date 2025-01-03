type CSVRow = Record<string, string | number | undefined>;

export function exportToCSV(data: CSVRow[], filename: string) {
  // Get all unique headers from the data
  const headers = Array.from(
    new Set(
      data.flatMap(row => Object.keys(row))
    )
  );

  // Create CSV content
  const csvContent = [
    // Headers row
    headers.join(','),
    // Data rows
    ...data.map(row =>
      headers
        .map(header => {
          const value = row[header];
          // Handle special characters and commas
          if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value ?? '';
        })
        .join(',')
    )
  ].join('\n');

  // Create and trigger download
  const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}