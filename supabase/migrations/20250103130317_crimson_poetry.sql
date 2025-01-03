/*
  # Add vote toggle functions

  1. Changes
    - Add increment_votes function for adding votes
    - Add decrement_votes function for removing votes
    - Ensure votes cannot go below 0

  2. Security
    - Functions are accessible to all users
    - Basic data validation to prevent negative votes
*/

-- Create or replace the increment votes function
CREATE OR REPLACE FUNCTION increment_votes(row_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE definitions
  SET votes = votes + 1
  WHERE id = row_id;
END;
$$ LANGUAGE plpgsql;

-- Create or replace the decrement votes function
CREATE OR REPLACE FUNCTION decrement_votes(row_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE definitions
  SET votes = GREATEST(votes - 1, 0)
  WHERE id = row_id;
END;
$$ LANGUAGE plpgsql;