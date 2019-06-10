---
title: "ls"
date: "2018-10-01"
meta_title: "Ghost-CLI utilities: ls - Documentation"
meta_description: "Use this command to list all Ghost sites and their status using the Ghost-CLI tool. Read more in the official documentation."
next:
  url: "/api/ghost-cli/run/"
  title: "Run"
keywords:
    - cli
    - ghost
    - ls
    - status
sidebar: "ghost-cli"
---

The `ghost ls` command lists all Ghost sites and their status ✅

The command reads information about installed instances from the `~/.ghost/config` file. This is useful if you can't remember where you installed a particular instance of Ghost, or are working with multiple instances (local, production, staging and so on). 

Call this command from anywhere 😎

## Output

```bash:title=Local Development

> ghost ls

┌────────────────┬─────────────────────────────────┬─────────┬─────────────────────-─┬─────┬──────-┬─────────────────┐
│ Name           │ Location                        │ Version │ Status                │ URL │ Port  │ Process Manager │
├────────────────┼─────────────────────────────────┼─────────┼─────────────────────-─┼─────┼──────-┼─────────────────┤
│ ghost-local    │ ~/Sites/cli-test                │ 1.22.1  │ stopped               │ n/a │ n/a   │ n/a             │
├────────────────┼─────────────────────────────────┼─────────┼─────────────────────-─┼─────┼──────-┼─────────────────┤
│ ghost-local-2  │ ~/Sites/theme-dev               │ 2.12.0  │ stopped               │ n/a │ n/a   │ n/a             │
├────────────────┼─────────────────────────────────┼─────────┼─────────────────────-─┼─────┼──────-┼─────────────────┤
│ ghost-local-3  │ ~/Sites/new-theme               │ 2.20.0  │ running (development) │     │ 2368  │ local           │
└────────────────┴─────────────────────────────────┴─────────┴──────────────────────-┴─────┴─────-─┴─────────────────┘

```

<br />

```bash:title=Production
> ghost ls

+ sudo systemctl is-active ghost_my-ghost-site
┌───────────────┬────────────────┬─────────┬──────────────────────┬─────────────────────────--┬──────┬─────────────────┐
│ Name          │ Location       │ Version │ Status               │ URL                       │ Port │ Process Manager │
├───────────────┼────────────────┼─────────┼──────────────────────┼─────────────────────────--┼──────┼─────────────────┤
│ my-ghost-site │ /var/www/ghost │ 2.1.2   │ running (production) │ https://my-ghost-site.org │ 2368 │ systemd         │
└───────────────┴────────────────┴─────────┴──────────────────────┴─────────────────────────--┴──────┴─────────────────┘

```
