export const topicLoader = async () => {
  const topicData = await fetch(
    "https://openapi.programming-hero.com/api/quiz"
  );
  const topics = await topicData.json();
  return topics.data;
};
