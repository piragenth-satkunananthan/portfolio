---
title: eBay Price Monitor
summary: Scrapes eBay listings, tracks prices over time and visualises the history in an interactive dashboard.
stack: [Python, Playwright, Streamlit, SQLite, Plotly, Docker]
repo: https://github.com/piragenth-satkunananthan/Ebay-price-monitor-scraper
featured: true
order: 3
highlights:
  - Playwright search scraper plus a background worker that re-scrapes every monitored product
  - Price history stored in SQLite and charted with Plotly in a Streamlit UI
  - Runs as a two-service Docker Compose app with a persistent data volume
---
