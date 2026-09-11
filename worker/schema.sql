CREATE TABLE IF NOT EXISTS submissions (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,                  -- 'contact' | 'feedback' | 'contribution'
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  statue_id TEXT,                      -- Liên kết tới linh đài nếu có
  message TEXT NOT NULL,
  file_keys TEXT,                      -- JSON array các key trong R2: ["key1", "key2"]
  file_meta TEXT,                      -- JSON metadata: [{ name, size, mime, key }]
  ip_country TEXT,
  user_agent TEXT,
  status TEXT DEFAULT 'new',           -- 'new' | 'reviewed' | 'archived'
  email_status TEXT DEFAULT 'pending', -- 'sent' | 'failed' | 'skipped'
  email_error TEXT,                    -- Chi tiết lỗi khi gửi email nếu có (Red Team #14)
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_submissions_created ON submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_submissions_type ON submissions(type);
