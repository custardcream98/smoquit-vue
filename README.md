# smoquit-vue

Smoquit 프로젝트 Vue로 옮기기 (+ 리팩토링)

# How to Configure Vue Project With Eslint, Prettier, TailwindCSS

1. Volar takeover mode [활성화](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode)
2. `.vue` Default formatter를 prettier로 변경
3. 나머지 설정은 본 레포의 `.prettierrc.json`, `.eslintrc.cjs`, `postcss.config.cjs`, `tailwind.config.cjs`, `.vscode/settings.json` 참고
   - **특이사항**: eslint `vue/multi-word-component-names` rule에서 `index.vue`는 무시하도록 설정해 barrel pattern 사용을 권장함.
