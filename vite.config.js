import path from 'path'

export default ({ mode }) => {
  if (mode === 'netlify') {
    return {}
  }

  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'stimulus-clipboard'
      },
      rollupOptions: {
        external: ['@hotwired/stimulus'],
        output: {
          globals: {
            '@hotwired/stimulus': 'Stimulus'
          }
        }
      }
    }
  }
}
