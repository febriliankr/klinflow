# Remaking Risetku.com with Next.js, Typescript and Sass

I changed the tech stack to Next.js because of its Server-Side Rendering Feature, SSO compatible, and Automatic Routing. Also used Typescript because in the long run it will be easier to debug things. For Sass, I only need to transform all the css because it's making weird bugs here and there. The overall code is much simpler than the previous project that only used React Javascript and plain css.

## Trying tech

https://github.com/splitbee/react-notion

git commit -m "netlify.toml added and next.config.ts"

## Compnents

### Added <WikiPopup/> Component

The WikiPopup component accepts `children`, `qnumber`, and `shortAnswer` as props.

the qnumber props will be rendered as link for "Pelajari lebih lanjut". This is how the Link will be rendered. So do not include `/faq#` as the link, only input the anchor tag.
```
href={`/faq#q${qNumber}`}>
```

The short answer is will take a markdown format. It uses react-markdown to generate from the shortAnswer props.

### Added active navbar indicator according to current page

the variable is currentLocation, named after LANY's song, listen [here](https://www.youtube.com/watch?v=_PUTnwz3YSU).