# Tabs

`Tabs` is a set of tabbed panels that can be navigated by selecting corresponding tab buttons. `Tabs` builds on `Explorer`, which takes care of the relative positioning of the tab buttons and the tab panels, and ensures that the selection state of the buttons and panels remains in sync. `Tabs` itself mostly adds the use of [TabButton](TabBUtton) elements as default proxies for the tab panels (the elements the user can click to select a panel), and [TabStrip](TabStrip) to contain the list of tab buttons. `Tabs` also adds accessibility support specific to tabbed interfaces.

A typical example of `Tabs` being used for navigation, using custom tab buttons:

[Tabs used for navigation](/demos/toolbarTabs.html)

You can select a tab with mouse/touch or a keyboard.

The `Tabs` class is registered as element `<elix-tabs>`.

## Usage

Use `Tabs` for situations in which the user can directly control which modal state is presented. Tabs are typically used to allow a UI to offer more controls than can fit in a confined area at a time.

* A common use case is Settings or configuration UIs. Here the classic look of a
  tabbed dialog or property sheet is addressed with the Elix's default
  [TabButton](TabButton) elements, although other looks are possible.
* Tabs may also be used in a main window to downplay less-commonly used aspects
  of a UI.
* Tabs are also an extremely common navigation model. Many mobile applications
  present a navigation toolbar that behave like tabs, presenting 3–5 buttons
  that correspond to the app's main areas. In navigation use cases, the tab
  buttons typically have a toolbar button style rather than a classic tabbed
  appearance.


## Using default tab buttons

By default, you only need to provide `Tabs` with child items that it will use as the tab panels. For best results, give each panel a text lable in an `aria-label` attribute.

    <elix-tabs>
      <div aria-label="One">Page one</div>
      <div aria-label="Two">Page two</div>
      <div aria-label="Three">Page three</div>
    </elix-tabs>

For each panel, `Tabs` will create a [TabButton](TabButton) instance, and that panel's `aria-label` as the content of the tab button.

[Tabs element with default tab buttons](/demos/tabs.html)


## Positioning and aligning tab buttons

`Tabs` exposes [proxyListPosition](#proxyListPosition) and [tabAlign](#tabAlign) properties that let you control, respectively, how the strip of tabs is positioned with respect to the panels and how they are visually aligned within the strip of tabs.

[You can customize tab position and alignment](/demos/tabPositions.html)


## Custom content in default tab buttons

If you would like to use the default tab button appearance, but have more control over the content of the tab buttons, you can create the tab buttons yourself. Add a `slot="tabButtons"` attribute to each button to specify that you want it to be treated as a tab button:

    <elix-tabs>
      <elix-tab-button slot="tabButtons">Un</elix-tab-button>
      <div aria-label="One">Page one</div>

      <elix-tab-button slot="tabButtons">Deux</elix-tab-button>
      <div aria-label="Two">Page two</div>

      <elix-tab-button slot="tabButtons">Trois</elix-tab-button>
      <div aria-label="Three">Page three</div>
    </elix-tabs>

Because the `<elix-tab-button>` instances are HTML elements, you can include arbitrarily complex content inside them: add icons, other graphical elements, etc.

As long as the relative order of the tab buttons and the panel elements are consistent, it doesn't matter where the tab buttons appear. You can interleave them with the panels (above) or, if it's more convenient, group the tab buttons together:

    <elix-tabs>
      <elix-tab-button slot="tabButtons">Un</elix-tab-button>
      <elix-tab-button slot="tabButtons">Trois</elix-tab-button>
      <elix-tab-button slot="tabButtons">Deux</elix-tab-button>

      <div aria-label="One">Page one</div>
      <div aria-label="Two">Page two</div>
      <div aria-label="Three">Page three</div>
    </elix-tabs>

In either case, the result is:

[Tabs with custom content in standard tab buttons](/demos/tabsWithTabButtons.html)


## Using custom tab buttons

You can also provide your custom elements as the tab buttons. For example, the demo showing tabs used for navigation at the top of this page can be created using code along these lines: 

    <elix-tabs tab-position="bottom" tab-align="stretch">

      <toolbar-tab slot="tabButtons" aria-label="Home">
        <div class="material-icons">home</div>
        Home
      </toolbar-tab>

      <toolbar-tab slot="tabButtons" aria-label="Search">
        <div class="material-icons">search</div>
        Search
      </toolbar-tab>

      <toolbar-tab slot="tabButtons" aria-label="Settings">
        <div class="material-icons">settings</div>
        Settings
      </toolbar-tab>

      <div>Home page</div>
      <div>Search page</div>
      <div>Settings page</div>

    </elix-tabs>

This uses Google's [Material Design icons](https://material.io/icons/) for button icons, but you can use whatever techniques are appropriate for your app's visual design.


## Customizing the stage

By default, `Tabs` uses [Modes](Modes) as the main stage showing the selected tab panel. `Modes` provides an immediate transition between panels, but you can override the `stageTag` property to specify another type of stage, such as [CrossfadeStage](CrossfadeStage):

[`CrossfadeStage` provides a crossfade effect when switching tabs](/demos/serene.html)

The tabbed navigation example at the top of the page shows a [SlidingPages](SlidingPages) element as the stage, which adds a horizontal sliding effect and support for touch/trackpad swipe gestures.