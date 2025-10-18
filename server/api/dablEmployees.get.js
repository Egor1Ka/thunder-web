export default defineEventHandler(async () => {
  const sourceUrl =
    "https://sheetjson.com/spreadsheets/d/1P2uL6d7tCnn3z7lqe4uJgzX5bBwyuu07SJb1OFjM-UY/edit?gid=1185335326#gid=452320508";

  try {
    const raw = await $fetch(sourceUrl, {
      responseType: "text",
      timeout: 15000,
    });

    const data = JSON.parse(raw);
    return data;
  } catch (err) {
    console.log("err", err);
    throw createError({
      statusCode: 502,
      statusMessage: "Players upstream fetch failed",
      data: { message: err?.message || "unknown error" },
    });
  }
});
