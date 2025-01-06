# F1GPT - Retriever-Augmented Generation Chatbot

## **Introduction**
F1GPT is a Retriever-Augmented Generation (RAG) chatbot designed to provide up-to-date, human-like responses about Formula 1. Powered by OpenAI's GPT-4, LangChain.js, and DataStax Vector Database, this chatbot retrieves and enhances answers using real-time data, surpassing the September 2021 cutoff of standard ChatGPT models.

---

### **[Live Demo - Try it here](https://nextjs-f1gpt.vercel.app/)**  


![App Snapshot](https://drive.google.com/uc?id=1ygjD600DuiD2DA9g8-sAuL43DmIYDVU0)


---

## **Key Features**
- **Dynamic Q&A**: Ask custom questions or choose from pre-defined prompts.
- **Real-Time Answers**: Retrieves and processes current Formula 1 data.
- **Humanlike Responses**: OpenAI embellishes answers for natural conversation.
- **Efficient Cost Management**: Reduces API costs by leveraging your data for embedding and querying.
- **Custom Knowledge Base**: Uses private and scraped data for accurate answers.

---

## **Technologies Used**
- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: OpenAI GPT-4 API, LangChain.js
- **Database**: DataStax Vector Database
- **Web Scraping**: Puppeteer
- **Deployment**: [Vercel](https://vercel.com/)

---

## **How it Works**
- **Scraping**: Uses Puppeteer to scrape data from sources like Wikipedia and Formula1.com.
- **Embedding**: Converts data into vector embeddings using OpenAI.
- **Querying**: Matches user queries with the closest embeddings in DataStax.
- **Response Generation**: Uses GPT-4 to format responses with additional context.


