import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import antfu from '@antfu/eslint-config'
import { defu } from 'defu'

export type StarterConfig = OptionsConfig & TypedFlatConfigItem

const baseConfig: StarterConfig = {
  pnpm: true,
  ignores: [
    '**/**.md',
  ],
  rules: {
    'no-console': 'off',
  },
}

export function eslintBase(config: StarterConfig = {}): ReturnType<typeof antfu> {
  return antfu(defu(config, baseConfig))
}
