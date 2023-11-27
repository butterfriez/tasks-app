<template>
    <div class="w-14 bg-background h-full border-r border-default flex flex-col items-center gap-3 py-3">
        <a href="/">
            <Icon color="#16db65" name="mingcute:task-2-line" size="30px" />
        </a>
        <span class="w-3/4 h-px bg-border" />
        <HeaderTooltip text="Tasks">
            <a class="w-full h-full" href="/tasks">
                <Icon color="#63656e" name="tdesign:home" size="20px"/>
            </a>
        </HeaderTooltip>
        <span class="w-3/4 h-px bg-border" />
        <div class="absolute bottom-5 flex flex-col items-center gap-5">
            <HeaderTooltip text="GitHub">
                <a href="https://github.com/butterfriez/tasks-app">
                    <Icon color="#63656e" name="mdi:github" size="20px"/>
                </a>
            </HeaderTooltip>
            <HeaderTooltip text="Profile">
                <a href="profile">
                    <Icon color="#63656e" name="uil:user" size="20px"/>
                </a>
            </HeaderTooltip>
        </div>
    </div>
</template>