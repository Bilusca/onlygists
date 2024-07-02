import { marked } from 'marked'

export function useMarkdown() {
  const render = (mdString: string) => {
    return marked.parse(mdString)
  }

  return { render }
}
