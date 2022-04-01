function header() {
    let header = document.getElementById("hcon");
    header.innerHTML = ` <div id="header">
    <div id="nav">
        <div>
            <a id="logo" href="./index.html">
                <svg viewBox="0 0 28 28" data-supported-dps="28x28" width="28" height="28" focusable="false">
                    <g transform="scale(.5833)" fill="none" fill-rule="evenodd">
                        <path
                            d="M0 4.01A4.01 4.01 0 014.01 0h39.98A4.01 4.01 0 0148 4.01v39.98A4.01 4.01 0 0143.99 48H4.01A4.01 4.01 0 010 43.99V4.01zM19 18.3h6.5v3.266C26.437 19.688 28.838 18 32.445 18 39.359 18 41 21.738 41 28.597V41.3h-7V30.159c0-3.906-.937-6.109-3.32-6.109-3.305 0-4.68 2.375-4.68 6.109V41.3h-7v-23zM7 41h7V18H7v23zm8-30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                            class="background" fill="#0077B5"></path>
                    </g>
                </svg>
                <div>
                    <span aria-hidden="true">
                        LEARNING
                    </span>
                </div>

            </a>
        </div>
        <div>
            <ul>
                <li class="hoverli">
                    <a class="hovera" href="">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" focusable="false">
                            <path
                                d="M4 3.67c.73 0 1.33.6 1.33 1.33S4.73 6.33 4 6.33 2.67 5.73 2.67 5 3.27 3.67 4 3.67zM8 4h13v2H8V4zm-4 6.67c.73 0 1.33.6 1.33 1.33s-.6 1.33-1.33 1.33-1.33-.6-1.33-1.33.6-1.33 1.33-1.33zM8 11h13v2H8v-2zm-4 6.67c.73 0 1.33.6 1.33 1.33s-.6 1.33-1.33 1.33-1.33-.6-1.33-1.33.6-1.33 1.33-1.33zM8 18h13v2H8v-2z">
                            </path>
                        </svg>
                        <div class="nav-bar__item-text ">
                            Browse
                        </div>
                    </a>
                </li>
                <li class="hoverli search">
                    <div id="searchbox">
                        <svg viewBox="0 0 24 24" width="24" height="24" focusable="false">
                            <path
                                d="M21 19.67l-5.44-5.44a7 7 0 10-1.33 1.33L19.67 21zm-11-4.54A5.13 5.13 0 1115.13 10 5.13 5.13 0 0110 15.13z">
                            </path>
                        </svg>
                        <div>
                            <div>
                                <input id="searchd" placeholder="Search for skills, subjects or software"
                                    type="search">
                            </div>
                        </div>

                        <div class="artdeco-typeahead__a11y-text" aria-live="polite">
                            <!---->
                        </div>
                    </div>
                    <!-- <input type="search" placeholder="Search for skills, subjects or software"> -->
                </li>
            </ul>
            <ul></ul>
        </div>
        <div>
            <ul>
                <li class="hoverli">
                    <a class="hovera" href="">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" focusable="false">
                            <path
                                d="M22 9.45l-9.15-6.19a1.5 1.5 0 00-1.69 0L2 9.45 3.06 11l.94-.63V20a1 1 0 001 1h6v-5h2v5h6a1 1 0 001-1v-9.63l.94.63zM18 19h-3v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4H6V8.89l6-4 6 4V19z">
                            </path>
                        </svg>
                        <div class="nav-bar__item-text ">
                            Home
                        </div>
                    </a>
                </li>
                <li class="hoverli">
                    <a class="hovera" href="">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" focusable="false">
                            <path
                                d="M21 4h-5.87A3.63 3.63 0 0012 5.6 3.63 3.63 0 008.88 4H3a1 1 0 00-1 1v14a1 1 0 001 1h6.25a2 2 0 012 1h1.55a2 2 0 012-1H21a1 1 0 001-1V5a1 1 0 00-1-1zM11 18.66A2.92 2.92 0 008.88 18H4V6h5.13A1.88 1.88 0 0111 7.88v10.78zm9-.66h-4.88a2.92 2.92 0 00-2.12.66V7.88A1.88 1.88 0 0114.88 6H20v12z">
                            </path>
                        </svg>
                        <div class="nav-bar__item-text ">
                            My Learning
                        </div>
                    </a>
                </li>
                <li class="hoverli">
                    <a class="hovera" href="">
                        <img viewBox="0 0 24 24" width="24" height="24" src="https://via.placeholder.com/1x1"
                            style="border-radius: 100%;">

                        </img>
                        <div class="nav-bar__item-text ">
                            Me⯆
                        </div>
                    </a>
                </li>
                <li class="hoverli">
                    <a class="hovera" href="">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" focusable="false">
                            <path
                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.9 12c0-.7 0-1.4.1-2.1h4c.1.6.1 1.3.1 2.1 0 .7 0 1.4-.1 2.1h-4c-.1-.7-.1-1.3-.1-2.1zm6-2.1h3.9c.2.7.3 1.3.3 2.1s-.1 1.4-.3 2.1h-3.9c.1-.6.1-1.3.1-2 0-.8 0-1.5-.1-2.2zm3.2-1.8h-3.5c-.3-1.5-.7-2.8-1.2-3.8 2 .6 3.7 2 4.7 3.8zm-6.9-4.2c.5.9 1.2 2.3 1.6 4.2h-3.5c.4-1.9 1-3.3 1.6-4.2h.3zm-2.6.4c-.5 1-.9 2.3-1.2 3.8H4.9c1-1.8 2.7-3.2 4.7-3.8zM4.2 9.9h3.9C8 10.6 8 11.3 8 12c0 .7 0 1.4.1 2H4.2c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2.1zm.7 6h3.5c.3 1.5.7 2.8 1.2 3.8-2-.6-3.7-2-4.7-3.8zm6.9 4.2c-.5-.9-1.1-2.3-1.5-4.2h3.5c-.4 1.9-1 3.3-1.5 4.2h-.5zm2.7-.4c.4-1 .9-2.3 1.2-3.8h3.5c-1.1 1.8-2.8 3.2-4.7 3.8z">
                            </path>
                        </svg>
                        <div class="nav-bar__item-text ">
                            EN⯆
                        </div>
                    </a>

                </li>
                <li class="hoverli">
                    <a class="subps" href="">
                        <div>Start my free month</div>

                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

<div id="nav2div">
    <div id="nav2">
        <div id="nav21">
            <div>Solution for:</div>
            <div><a href="">Business</a></div>
            <div><a href="">Higher Education</a></div>
            <div><a href="">Government</a></div>
        </div>
        <div id="nav22">
            <div><a href="">Buy for the team</a></div>
        </div>
    </div>
</div>`
  }

  function footer() {
    let footer = document.getElementById("footerdiv");
    footer.innerHTML = `<div id="footer">
    <div id="foot1">
        <div><a href="">English (English)⯆</a></div>
        <div>•</div>
        <div><a href="">About</a></div>
        <div>•</div>
        <div><a href="">Become an Instructor</a></div>
        <div>•</div>
        <div><a href="">Buy for my team</a></div>
        <div>•</div>
        <div><a href="">Help</a></div>
        <div>•</div>
        <div><a href="">Privacy & Terms ⯅</a></div>
        <div>•</div>
        <div><a href="">Accessibility</a></div>
        <div>•</div>
        <div><a href="">Apps⯅</a></div>
    </div>
    <div id="foot2">
        <svg viewBox="0 0 84 21"  width="84" height="21" focusable="false">
            <g  fill="none" fill-rule="evenodd">
                <path
                    d="M82.042 0H64.146c-.856 0-1.583.677-1.583 1.511v17.977c0 .835.727 1.512 1.583 1.512h17.896c.857 0 1.52-.677 1.52-1.512V1.511C83.563.677 82.9 0 82.043 0"
                     fill="#FFF"></path>
                <path
                    d="M82.042 0H64.146c-.856 0-1.583.677-1.583 1.511v17.977c0 .835.727 1.512 1.583 1.512h17.896c.857 0 1.52-.677 1.52-1.512V1.511C83.563.677 82.9 0 82.043 0zM70.875 7.875h2.844v1.429c.41-.822 1.46-1.56 3.038-1.56 3.025 0 3.743 1.635 3.743 4.636v5.557h-3.063v-4.874c0-1.709-.41-2.672-1.452-2.672-1.446 0-2.048 1.039-2.048 2.672v4.874h-3.062V7.876zm-5.25 10.063h3.063V7.874h-3.063v10.063zm3.5-13.344a1.969 1.969 0 11-3.938 0 1.969 1.969 0 013.938 0z"
                     fill="#0073B0"></path>
            </g>
            <g >
                <path
                    d="M59.5 17.938h-2.625v-1.532c-.478.727-1.87 1.663-3.281 1.663-2.99 0-4.944-1.892-4.944-4.944 0-2.803 1.641-5.381 4.506-5.381 1.287 0 2.576.25 3.282 1.225V3.063H59.5v14.874zm-5.578-7.482c-1.557 0-2.34.935-2.34 2.45 0 1.516.783 2.494 2.34 2.494s2.56-.978 2.56-2.494c0-1.515-1.003-2.45-2.56-2.45zM47.25 16.242c-.997 1.267-2.994 1.827-4.922 1.827-3.114 0-5.053-2.164-5.053-5.381 0-3.218 2.319-4.944 5.49-4.944 2.626 0 4.835 1.845 4.835 5.381 0 .547-.088.875-.088.875H40.25l.049.293c.174.964 1.208 1.457 2.412 1.457 1.017 0 1.778-.443 2.297-1.148l2.242 1.64zm-2.734-4.43c.02-1.038-.814-1.88-1.935-1.88-1.37 0-2.248.905-2.331 1.88h4.266z">
                </path>
                <path
                    d="M27.563 3.063h3.062v8.75l3.5-3.938h3.828l-4.266 4.594 4.102 5.469h-3.664l-3.5-4.813v4.813h-3.063zM16.188 7.875h2.625v1.477c.414-.79 1.766-1.608 3.28-1.608 3.156 0 3.72 1.862 3.72 4.56v5.633H22.75v-4.976c0-1.162.067-2.548-1.531-2.548-1.619 0-1.969 1.24-1.969 2.548v4.976h-3.063V7.876zM12.906 2.68c1.012 0 1.914.903 1.914 1.914 0 1.01-.902 1.914-1.914 1.914-1.01 0-1.914-.903-1.914-1.914s.904-1.914 1.914-1.914zm-1.531 15.258h3.063V7.874h-3.063v10.063zM0 3.063h3.063v11.812h6.562v3.063H0z">
                </path>
            </g>
        </svg>
        <p>LinkedIn Corporation © 2022</p>
    </div>
</div>`
  }
  export {header,footer} ;