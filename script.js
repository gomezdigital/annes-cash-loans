/* =========================================================
   ANNE'S CASH LOANS
   Main JavaScript
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DOM READY
    ===================================================== */

    document.addEventListener("DOMContentLoaded", function () {


        /* =================================================
           ELEMENTS
        ================================================= */

        var menuToggle =
            document.getElementById("menu-toggle");

        var navigation =
            document.getElementById("main-navigation");

        var header =
            document.getElementById("site-header");

        var year =
            document.getElementById("year");

        var navigationLinks =
            document.querySelectorAll(
                "#main-navigation a"
            );


        /* =================================================
           CURRENT YEAR
        ================================================= */

        if (year) {

            year.textContent =
                new Date().getFullYear();

        }


        /* =================================================
           MOBILE MENU
        ================================================= */

        if (menuToggle && navigation) {


            menuToggle.addEventListener(
                "click",
                function () {

                    var isOpen =
                        navigation.classList.toggle("open");

                    menuToggle.classList.toggle(
                        "active",
                        isOpen
                    );

                    document.body.classList.toggle(
                        "menu-open",
                        isOpen
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        isOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    );

                }
            );


            /* ---------------------------------------------
               CLOSE MENU AFTER LINK CLICK
            --------------------------------------------- */

            navigationLinks.forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navigation.classList.remove(
                            "open"
                        );

                        menuToggle.classList.remove(
                            "active"
                        );

                        document.body.classList.remove(
                            "menu-open"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        menuToggle.setAttribute(
                            "aria-label",
                            "Open navigation menu"
                        );

                    }
                );

            });


            /* ---------------------------------------------
               CLOSE MENU WITH ESCAPE
            --------------------------------------------- */

            document.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Escape" &&
                        navigation.classList.contains("open")
                    ) {

                        navigation.classList.remove(
                            "open"
                        );

                        menuToggle.classList.remove(
                            "active"
                        );

                        document.body.classList.remove(
                            "menu-open"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        menuToggle.setAttribute(
                            "aria-label",
                            "Open navigation menu"
                        );

                        menuToggle.focus();

                    }

                }
            );

        }


        /* =================================================
           HEADER SCROLL EFFECT
        ================================================= */

        function updateHeader() {

            if (!header) {
                return;
            }

            if (window.scrollY > 30) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        }


        updateHeader();


        window.addEventListener(
            "scroll",
            updateHeader,
            {
                passive: true
            }
        );


        /* =================================================
           SMOOTH INTERNAL NAVIGATION
        ================================================= */

        document
            .querySelectorAll('a[href^="#"]')
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        var targetId =
                            this.getAttribute("href");

                        if (
                            !targetId ||
                            targetId === "#"
                        ) {
                            return;
                        }

                        var target =
                            document.querySelector(
                                targetId
                            );

                        if (!target) {
                            return;
                        }

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }
                );

            });


        /* =================================================
           FAQ ACCESSIBILITY
        ================================================= */

        var faqItems =
            document.querySelectorAll(
                ".faq-item"
            );


        faqItems.forEach(function (item) {

            item.addEventListener(
                "toggle",
                function () {

                    if (!item.open) {
                        return;
                    }

                    faqItems.forEach(
                        function (otherItem) {

                            if (
                                otherItem !== item &&
                                otherItem.open
                            ) {

                                otherItem.open =
                                    false;

                            }

                        }
                    );

                }
            );

        });


        /* =================================================
           WHATSAPP SAFETY
        ================================================= */

        var whatsappLinks =
            document.querySelectorAll(
                'a[href*="wa.me"]'
            );


        whatsappLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    /*
                     * No sensitive customer information
                     * should be requested through an
                     * unsecured website form.
                     *
                     * WhatsApp links are intentionally
                     * limited to starting a conversation.
                     */

                }
            );

        });


        /* =================================================
           RESIZE SAFETY
        ================================================= */

        window.addEventListener(
            "resize",
            function () {

                /*
                 * If the screen becomes desktop-sized
                 * while the mobile menu is open,
                 * reset the mobile menu state.
                 */

                if (
                    window.innerWidth > 800 &&
                    navigation &&
                    navigation.classList.contains("open")
                ) {

                    navigation.classList.remove(
                        "open"
                    );

                    if (menuToggle) {

                        menuToggle.classList.remove(
                            "active"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        menuToggle.setAttribute(
                            "aria-label",
                            "Open navigation menu"
                        );

                    }

                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }
        );


    });


})();
