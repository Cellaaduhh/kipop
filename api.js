async function handleBugSend(chatId, selectedBug) {
  const res = await fetch(`https://kipopwebbug.whaxzero.my.id/kipop?chatId=${encodeURIComponent(chatId)}&type=${selectedBug}`);
  if (!res.ok) throw new Error("Gagal menghubungi server");
  return await res.json();
}
