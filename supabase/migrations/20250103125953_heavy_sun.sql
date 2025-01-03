/*
  # Fix voting functionality

  1. Changes
    - Add increment function for votes
    - Simplify vote update process
    - Ensure atomic updates

  2. Security
    - Maintain data integrity
    - Keep existing RLS policies
*/

-- Create or replace the increment function
CREATE OR REPLACE FUNCTION increment_votes(row_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE definitions
  SET votes = votes + 1
  WHERE id = row_id;
END;
$$ LANGUAGE plpgsql;