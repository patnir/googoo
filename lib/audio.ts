export function chapterAudioPath(slug: string, chapterNumber: number): string {
  return `/audio/${slug}/chapter-${String(chapterNumber).padStart(2, "0")}.mp3`
}
