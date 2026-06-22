CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  telegram_id BIGINT,
  title TEXT,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);