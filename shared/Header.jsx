import { h } from 'preact'; // jshint ignore:line


/**
 * Top navigation links
 */
export default (props) => (
  <nav>
    <div class="gutter"></div>
    <a class="logoLink" href="/">
      <img src="/static/resources/images/elix.png"/>
    </a>
    <div class="headerLinks">
      <a id="linkAbout" href="/">HOME</a> &nbsp; / &nbsp;&nbsp;
      <a id="linkAbout" href="/documentation">DOCUMENTATION</a> &nbsp; / &nbsp;&nbsp;
      <a id="linkAbout" href="/gold-standard">GOLD STANDARD</a> &nbsp; / &nbsp;&nbsp;
      <a id="linkAbout" href="https://github.com/elix/elix">GITHUB</a>
    </div>
    <div class="gutter"></div>
  </nav>
);
