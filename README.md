Here’s a clean, copy-paste-ready `README.md` tailored for your **`resume-dashboard`** project with Supabase, Retool, and React integration:

---

````markdown
# 📊 Resume Dashboard

A full-stack Resume Analytics Dashboard that tracks resume uploads by candidates using a Supabase backend, a React-based frontend, and Retool for admin insights.

## 🔧 Tech Stack

- **Frontend**: React
- **Backend**: FastAPI
- **Database**: Supabase (PostgreSQL)
- **Admin Dashboard**: Retool
- **File Storage**: Supabase Storage

---

## 🚀 Features

✅ Upload resumes with metadata (title, timestamp, candidate info)  
✅ Tracks total candidates, total resumes, resumes per candidate  
✅ Time series view of resume uploads  
✅ API-powered stats on "Resumes in Last 7 Days"  
✅ Fully integrated with Retool for business-friendly analytics

---

## ⚙️ Setup Instructions

### 1. 💻 Frontend Setup

```bash
cd resume-dashboard
npm install
npm run start
```

Update `REACT_APP_API_URL` in `.env` if necessary.

### 2. Backend Setup 

Refer github repository:
https://github.com/bharathbhaskr/resume-management


## 📈 Retool Metrics

Built-in queries:

* `qTotalCandidates`: Count of registered candidates
* `qTotalResumes`: Count of resumes uploaded
* `qAvgResumes`: Average resumes per candidate
* `qNew7`: Resumes uploaded in the last 7 days
* `qResumesOverTime`: Time-series for resume uploads

Ensure all queries have **"Run automatically"** enabled.

---

## Example Metrics

| Metric                | Value |
| --------------------- | ----- |
| Total Candidates      | 3     |
| Total Resumes         | 4     |
| Avg Resumes/Candidate | 1.33  |
| Last 7 Days Uploads   | 0     |

---

## License

MIT License — feel free to fork and use commercially with attribution.

---

## Author

[Bharath Bhaskar](https://github.com/bharathbhaskr)

