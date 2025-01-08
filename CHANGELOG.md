# Change Log

## [1.0.6] 2025-01-08

### Added for NPM

- Added TypeScript support for all JavaScript components
  - Accordion component rewritten in TypeScript
    - Added AccordionConfig interface and IAccordion interface
    - Added programmatic Accordion class implementation
  - Gallery component rewritten in TypeScript
  - Stepper component rewritten in TypeScript
    - Added StepperConfig interface and IStepper interface
    - Added programmatic Stepper class implementation
  - Popover component rewritten in TypeScript
    - Added PopoverConfig interface and IPopover interface
    - Added programmatic Popover class implementation
  - Tooltip component rewritten in TypeScript
    - Added TooltipConfig interface and ITooltip interface
    - Added programmatic Tooltip class implementation
  - Tabs component rewritten in TypeScript
    - Added TabsConfig interface and ITabs interface
    - Added programmatic Tabs class implementation
  - Modal component rewritten in TypeScript
    - Added ModalConfig interface and IModal interface
    - Added programmatic Modal class implementation
  - Dropdown component rewritten in TypeScript
    - Added DropdownConfig interface and IDropdown interface
    - Added programmatic Dropdown class implementation
  - Collapse component rewritten in TypeScript
    - Added CollapseConfig interface and ICollapse interface
    - Added programmatic Collapse class implementation
  - Alert component rewritten in TypeScript
  - All future components will be written in TypeScript
  - Added TypeScript type definitions and interfaces
  - Improved type safety and developer experience with strict typing

## [1.0.5] 2024-12-24

### Added for NPM

- Added new functions for Accordion, Gallery and Stepper
- Added cleanup functions for Accordion, Gallery and Stepper

## [1.0.4] 2024-12-19

### Added for NPM

- Fixed Cleanup functions `clear()` replaced with `delete()`
- Global init for all components via `initDavidAI()`
- Fixed Popover custom content animation breaking

## [1.0.3] 2024-12-19

### Added for NPM

- Added for all components
  - Init functions on DOMContentLoaded
  - MutationObserver to reinitialize the components when new elements are added

## [1.0.2] 2024-12-19

### Added for NPM

- All components are now updated with weakset
  - to prevent memory leaks
  - to prevent multiple instances of the same component from being created
  - duplicate instances of the same component will be ignored
  - will initialize the components only once

## [1.0.1] 2024-12-18

### Added for NPM

- Added export for esm

## David AI - Release 1.0.0 - 2024-12-18

**Rename the project from Tailwind Starter Kit to David AI**

### Changed

- The project name from Tailwind Starter Kit to David AI
- Added David UI HTML components
- Added David AI JavaScript components
- Added David UI Docs pages

## [1.1.0] 2021-03-23

### Bug fixing

- https://github.com/creativetimofficial/tailwind-starter-kit/issues/19
- https://github.com/creativetimofficial/tailwind-starter-kit/issues/16
- https://github.com/creativetimofficial/tailwind-starter-kit/issues/10
  - Thanks to this comment https://github.com/creativetimofficial/tailwind-starter-kit/issues/10#issuecomment-730641008 from @ryanwinchester

### Major style changes

- The upgrade of Tailwind CSS from version 1 to version 2, will cause multiple style changes, check them out on the official Tailwind CSS websites:
  - https://blog.tailwindcss.com/tailwindcss-v2
  - https://tailwindcss.com/
  - https://tailwindcss.com/docs/upgrading-to-v2
- To make a lot of our changes, we've followed the instructions from here (minus the `colors` and `font-sizes`): https://tailwindcss.com/docs/upgrading-to-v2
  - For the colors, the only change that we made, is the fact that we've added all Tailwind CSS colors to our `tailwind.config.js` files, and inside our product, all `{type}-gray-{number}` classes were renamed to `{type}-blueGray-{number}`
  - After that, we've changed `{type}-blueGray-{number}` to `{type}-blueGray-{lower-number}`, i.e. (`100` became `50`, `200` became `100`, ..., `900` became `800`)
    - You can achieve this, by search in your whole project for `blueGray-100` and replace it with `blueGray-50`
    - Then, you search in your whole project for `blueGray-200` and replace it with `blueGray-100`
    - Then, you search in your whole project for `blueGray-300` and replace it with `blueGray-200`
    - Then, you search in your whole project for `blueGray-400` and replace it with `blueGray-300`
    - Then, you search in your whole project for `blueGray-500` and replace it with `blueGray-400`
    - Then, you search in your whole project for `blueGray-600` and replace it with `blueGray-500`
    - Then, you search in your whole project for `blueGray-700` and replace it with `blueGray-600`
    - Then, you search in your whole project for `blueGray-800` and replace it with `blueGray-700`
    - Then, you search in your whole project for `blueGray-900` and replace it with `blueGray-800`
  - For the colors, the only change that we made, is the fact that we've added all Tailwind CSS colors to our `tailwind.config.js` files, and inside our product, all `{type}-blue-{number}` classes were renamed to `{type}-lightBlue-{number}`
  - For the colors, the only change that we made, is the fact that we've added all Tailwind CSS colors to our `tailwind.config.js` files, and inside our product, all `{type}-green-{number}` classes were renamed to `{type}-emerald-{number}`
  - We've also added on most of our inputs the `border-0` class
  - And on the inputs that were checkboxes, beside the `border-0` class, we've also had to add `rounded` class as well

### Deleted components

### Added components

- We've also added our first NextJS page: `Landing Page/next-landing-page`
  - Here is the PR for it: https://github.com/creativetimofficial/tailwind-starter-kit/pull/11
  - Special thanks to @MeridjaNassim
- If you want to add new pages, feel free to open a PR: https://github.com/creativetimofficial/tailwind-starter-kit/pulls

### Deleted dependencies

- `popper.js`

### Added dependencies

- `@popperjs/core@2.9.1` - So, we've changed the way we use Popper, check out our docs here:
  - https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/vue/dropdown (you can check the Angular, JS and React as well from here)
  - https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/vue/popovers/left (you can check the Angular, JS and React as well from here)
  - https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/vue/tooltips/left (you can check the Angular, JS and React as well from here)
- `typescript` (for the React versions to stop console warnings - NOTE: the projects are not based on TypeScript)
- `@vue/compiler-sfc@3.0.7` (for the VueJS versions since we've upgraded to Vue@3)
- `vue-router@4.0.5` (for the VueJS versions since we've upgraded to Vue@3)

### Angular Updated dependencies

```
@angular/animations                   8.2.12   →     11.2.6
@angular/common                       8.2.12   →     11.2.6
@angular/compiler                     8.2.12   →     11.2.6
@angular/core                         8.2.12   →     11.2.6
@angular/forms                        8.2.12   →     11.2.6
@angular/platform-browser             8.2.12   →     11.2.6
@angular/platform-browser-dynamic     8.2.12   →     11.2.6
@angular/router                       8.2.12   →     11.2.6
@fortawesome/fontawesome-free         5.11.2   →     5.15.3
chart.js                               2.9.3   →      2.9.4
rxjs                                   6.4.0   →      6.6.6
tslib                                ^1.10.0   →     ^2.1.0
zone.js                                0.9.1   →     0.11.4
@angular-devkit/build-angular       0.803.15   →   0.1102.5
@angular/cli                          8.3.15   →     11.2.5
@angular/compiler-cli                 8.2.12   →     11.2.6
@angular/language-service             8.2.12   →     11.2.6
@types/node                            8.9.4   →   14.14.35
@types/jasmine                         3.3.8   →      3.6.7
@types/jasminewd2                      2.0.3   →      2.0.8
codelyzer                             ^5.0.0   →     ^6.0.1
jasmine-core                           3.4.0   →      3.7.1
jasmine-spec-reporter                  4.2.1   →      6.0.0
karma                                  4.1.0   →      6.2.0
karma-chrome-launcher                  2.2.0   →      3.1.0
karma-coverage-istanbul-reporter       2.0.1   →      3.0.3
karma-jasmine                          2.0.1   →      4.0.1
karma-jasmine-html-reporter           ^1.4.0   →     ^1.5.4
protractor                             5.4.0   →      7.0.0
ts-node                                7.0.0   →      9.1.1
tslint                                5.15.0   →      6.1.3
typescript                             3.5.3   →      4.0.7
```

### HTML Updated dependencies

```
@fortawesome/fontawesome-free    5.11.2   →     5.15.3
chart.js                          2.9.3   →      2.9.4
```

### React Updated dependencies

```
@fortawesome/fontawesome-free    5.11.2   →   5.15.3
chart.js                          2.9.3   →    2.9.4
react                           16.11.0   →   17.0.1
react-dom                       16.11.0   →   17.0.1
react-router                      5.1.2   →    5.2.0
react-router-dom                  5.1.2   →    5.2.0
react-scripts                     3.2.0   →    4.0.3
```

### VueJS Updated dependencies

```
@fortawesome/fontawesome-free   5.11.2   →   5.15.3
chart.js                         2.9.3   →    2.9.4
core-js                          3.3.2   →    3.9.1
vue                             2.6.10   →    3.0.7
@vue/cli-plugin-babel            4.0.0   →   5.0.0-alpha.7
@vue/cli-plugin-eslint           4.0.0   →   5.0.0-alpha.7
@vue/cli-service                 4.0.0   →   5.0.0-alpha.7
babel-eslint                    10.0.3   →   10.1.0
eslint                          5.16.0   →   7.22.0
eslint-plugin-vue                5.0.0   →    7.8.0
vue-template-compiler           2.6.10   →   2.6.12
```

### NextJS Updated dependencies

```
@fortawesome/fontawesome-free     ^5.15.0   →     ^5.15.3
next-images                        ^1.6.0   →      ^1.7.0
react                            ^16.12.0   →     ^17.0.2
@types/react                     ^16.9.16   →     ^17.0.3
react-dom                        ^16.12.0   →     ^17.0.2
@types/react-dom                  ^16.9.4   →     ^17.0.3
sass                             ^1.26.11   →     ^1.32.8
@fullhuman/postcss-purgecss        ^3.0.0   →      ^4.0.3
@types/node                     ^12.12.21   →   ^14.14.35
tailwindcss                       ^1.8.10   →      ^2.0.4
typescript                            4.0   →         4.2
```

### Warning

_When doing a clean install, you might have some warnings, those come from `node_modules` and do not affect the project in any way._

## [1.0.0] 2019-12-20

### Original Release

- Generated Tailwind CSS files using the following documentation: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/build-tools
- Created files and projects for each of the Example Pages from the above link, for
  - Angular
  - HTML with JavaScript
  - React
  - VueJS
