// server/api/players.get.js
export default defineEventHandler(async () => {
  const sourceUrl = "https://sheetdb.io/api/v1/mkyt85pd7lnlo?sheet=players";

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
