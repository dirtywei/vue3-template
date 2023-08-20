import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  exclude: [
    'node_modules',
    '.git',
    '.github',
    '.husky',
    '.vscode',
    'build',
    'dist',
    'mock',
    'public',
    './stats.html'
  ],
  presets: [presetUno(), presetAttributify()],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'f-c-c': 'flex justify-center items-center',
    'absolute-lt': 'absolute left-0 top-0',
    'absolute-lb': 'absolute left-0 bottom-0',
    'absolute-rt': 'absolute right-0 top-0',
    'absolute-rb': 'absolute right-0 bottom-0',
    'absolute-tl': 'absolute-lt',
    'absolute-tr': 'absolute-rt',
    'absolute-bl': 'absolute-lb',
    'absolute-br': 'absolute-rb',
    'absolute-center': 'absolute-lt flex-center wh-full',
    'fixed-lt': 'fixed left-0 top-0',
    'fixed-lb': 'fixed left-0 bottom-0',
    'fixed-rt': 'fixed right-0 top-0',
    'fixed-rb': 'fixed right-0 bottom-0',
    'fixed-tl': 'fixed-lt',
    'fixed-tr': 'fixed-rt',
    'fixed-bl': 'fixed-lb',
    'fixed-br': 'fixed-rb',
    'fixed-center': 'fixed-lt flex-center wh-full'
  },
  rules: [[/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })]]
})
