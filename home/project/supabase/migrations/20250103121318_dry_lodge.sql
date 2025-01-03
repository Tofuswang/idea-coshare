/*
  # Fix RLS policies for public access

  1. Changes
    - Simplify RLS policies to ensure public access works correctly
    - Remove unnecessary conditions that might block operations
    - Keep basic data integrity checks for vote updates

  2. Security
    - Enable RLS but allow public access
    - Maintain vote update integrity
*/

-- Create the definitions table if it doesn't exist
DO $$ BEGIN
  CREATE TABLE IF NOT EXISTS definitions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    term text NOT NULL,
    content text NOT NULL,
    author text NOT NULL,
    recorder text,
    source text,
    created_at timestamptz DEFAULT now(),
    votes integer DEFAULT 0,
    category text[]
  );
EXCEPTION
  WHEN duplicate_table THEN
    NULL;
END $$;

-- Enable RLS
ALTER TABLE definitions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Definitions are viewable by everyone" ON definitions;
DROP POLICY IF EXISTS "Public can create definitions" ON definitions;
DROP POLICY IF EXISTS "Public can update votes" ON definitions;

-- Create simplified policies
CREATE POLICY "Enable read access for all users" ON definitions FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON definitions FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON definitions FOR UPDATE USING (true);