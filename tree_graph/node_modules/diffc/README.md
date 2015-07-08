# diffc
Colored diff output as seen in git-diff

# Installation
`npm i -g diffc`

Also, make sure that you have `diff` installed since `diffc` uses that internally.

# Usage
`diffc <path to file1> <path to file2>`


> Note:
> If using with `less` or a pager, you need to pass the `--color=always` option to `diffc`
> Example: `diffc ~/.emacs ~/backup-location/.emacs --color=always | less -r`
