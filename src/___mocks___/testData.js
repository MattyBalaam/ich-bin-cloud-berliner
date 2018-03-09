const getTestSet = () => {
  return {"topics": [
    {
      "id": "1",
      "label": "a",
      "volume": 1,
      "type": "topic",
      "sentiment": {
        "negative": 3,
        "neutral": 133,
        "positive": 29
      },
      "sentimentScore": 65
    }, {
      "id": "2",
      "label": "b",
      "volume": 2,
      "type": "topic",
      "sentiment": {
        "negative": 4,
        "neutral": 134,
        "positive": 30
      },
      "sentimentScore": 165
    }
  ]}
};
const getTestLegend = () => { 
  return {
    "title": "Sentiment",
    "labels": [
      {
        "title": "red", 
        "description": "under 40",
        "condition": "< 40"
      }, {
        "title": "grey", 
        "description": "40 – 60",
        "condition": ""
      }, {
        "title": "green", 
        "description": "over 60",
        "condition": "> 60"
      }
    ]
  }
} 
const getTestDetails = () => {
  return {
    "title": "Sentiment",
    "labels": [
      {
        "title": "red", 
        "description": "under 40",
        "condition": "< 40"
      }
    ]
  }
}

export {
  getTestSet,
  getTestLegend,
  getTestDetails
}
