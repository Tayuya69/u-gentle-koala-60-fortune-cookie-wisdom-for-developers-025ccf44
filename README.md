# Fortune Cookie Wisdom for Developers

[![make.fun](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/competitions/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/Tayuya69/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/rank.svg)](https://make.fun/competitions/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/Tayuya69/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/reward.svg)](https://make.fun/competitions/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

Entry for the [Fortune Cookie Wisdom for Developers](https://make.fun/competitions/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44) bounty on [make.fun](https://make.fun).

## The fortune

> Every estimate you give is a fortune told about a future you have not yet debugged.

## How it works

`main.ts` (Node 22, TypeScript, Node built-ins only) writes exactly that one
line to `/output/entry.txt`. Outside the grader, set `MAKEFUN_OUTPUT_DIR` to
choose the output directory. The text is a fixed string in code — no network,
no randomness, no clock — so every run writes the same bytes.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
