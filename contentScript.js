//     console.log("987666")
// const func=()=>{
//     // const data = document.getElementsByTagName("body")[0];
//     // data.innerHTML = "Hello World";
// }
(() => {

    const func = () => {
        const bg = "rgb(38,38,38)"
        const tc = "rgb(228, 226, 226)"
        const btnb = "rgb(65, 65, 64)"
        const hgt = "rgb(159, 203, 253)" // for heighligh text
        const bhc = "rgb(126, 171, 222)" // for big heading
        const fdb = "rgb(27, 150, 251)" // for dark blue
        const fdg = "rgb(67, 186, 31)" // for dark green
        const lfc = "rgb(251, 189, 2)" // legend 1st char
        const bc = "rgb(251, 189, 2)" // black character name
        const rdc = "rgb(234,51,35)" // red color
        const org = "rgb(240,146,53)" // orange color
        const pnk = "rgb(156, 31, 164)" // pink color
        const lgtgrn = "rgb(87, 171, 165)" // light green
        const greyclr = "rgb(128, 128, 128)" // grey color

        // .msubsup > span > span > span white color
        try {
            data = document.querySelectorAll(".math > span > span > span");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + "white" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .user-legendary red
        try {
            data = document.querySelectorAll(".user-legendary");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + rdc + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .Grandmaster red
        try {
            data = document.querySelectorAll(".Grandmaster");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + rdc + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }


        // const bg="rgb(26,26,26)"
        var data = document.getElementById("body");
        if (data) {
            data.style.backgroundColor = bg;
        }
        data = document.getElementsByTagName("body")[0]
        if (data) {
            data.style.backgroundColor = bg;
        }
        try {
            var data = document.getElementsByTagName("div");
            for (var i = 0; i < data.length; i++) {
                data[i].style.backgroundColor = bg;
                data[i].style.color = "white";
            }
            // document.getElementsByTagName("div")[0].style.backgroundColor = bg;
        } catch (error) {
            console.log("err1", error)
        }
        // for navbar
        try {
            data = document.getElementsByClassName("menu-list-container");
            for (var i = 0; i < data.length; i++) {
                data[i].style.backgroundColor = btnb;
                data[i].style.color = "white";
            }
            data = document.getElementsByClassName("menu-box");
            for (var i = 0; i < data.length; i++) {
                data[i].style.backgroundColor = btnb;
                data[i].style.color = "white";
            }
            // menu-list main-menu-list
            data = document.getElementsByClassName("main-menu-list");
            for (var i = 0; i < data.length; i++) {
                data[i].style.backgroundColor = btnb;
                data[i].style.color = "white";
            }
            data = document.getElementsByClassName("menu-list");
            for (var i = 0; i < data.length; i++) {
                data[i].style.backgroundColor = btnb;
                data[i].style.color = "white";
            }
            data = document.querySelectorAll(".menu-list > li > a");
            for (var i = 0; i < data.length; i++) {
                data[i].style.color = "white";
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for headings
        try {
            data = document.querySelectorAll(".title > a > p");
            for (var i = 0; i < data.length; i++) {
                // data[i].style.color = bhc;
                data[i].setAttribute("style", "color: " + bhc + " !important;");
            }

        }
        catch (error) {
            console.log("err2", error)
        }

        // for highlight text
        try {
            data = document.querySelectorAll(".ttypography > p > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // for topic-read-more highlight
        try {
            data = document.querySelectorAll(".topic-read-more");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for right-meta highlight
        try {
            data = document.querySelectorAll(".right-meta > ul > li > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for .info > a highlight
        try {
            data = document.querySelectorAll(".info > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }


        // for .page-index white color
        try {
            data = document.querySelectorAll(".page-index > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + "white" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for .arrow white color
        try {
            data = document.querySelectorAll(".arrow");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + "white" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for .inactive color grey
        try {
            data = document.querySelectorAll(".inactive");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + "black" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }



        // for page-index active set color black
        try {
            data = document.querySelectorAll(".active > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "backgroundColor: " + "black" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }






        // for .contest-state-phase with heading
        try {
            data = document.querySelectorAll(".contest-state-phase");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + bhc + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for .sidebox > div > div >a witl link
        try {
            data = document.querySelectorAll(".sidebox > div > div > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // for .countdown white color
        try {
            data = document.querySelectorAll(".countdown");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + "white" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // for ._englishName link 
        try {
            data = document.querySelectorAll("._englishName > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // for .bottom-links > table > tbody > tr > td link color
        try {
            data = document.querySelectorAll(".bottom-links > table > tbody > tr > td > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // for setting .top-contributed nth child even property color to grey
        try {
            data = document.querySelectorAll(".top-contributed > table > tbody > tr:nth-child(even) > td");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "background-color: " + "rgb(56, 56, 56)" + ";");
                // data[i].setAttribute("style", "color: "+greyclr+" !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }



        // for .recent-actions > ul > li > div > a
        try {
            data = document.querySelectorAll(".recent-actions > ul > li > div > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + ";");
            }
        }
        catch (error) {
            console.log("err2", error)
        }





        // chrome.runtime.onMessageExternal.addEventListener((obj, sender, response) => {
        //     // const { type, value, videoId } = obj;
        //     const data=document.getElementById("body");
        //     console.log(1111,data)
        // if (type === "NEW") {
        //     currentVideo = videoId;
        //     newVideoLoaded();
        // } else if (type === "PLAY") {
        //     youtubePlayer.currentTime = value;
        // } else if (type === "DELETE") {
        //     currentVideoBookmarks = currentVideoBookmarks.filter((b) => b.time != value);
        //     chrome.storage.sync.set({ [currentVideo]: JSON.stringify(currentVideoBookmarks) });

        //     response(currentVideoBookmarks);
        // }
        // });

        // newVideoLoaded();



        // for .lang-chooser > div > a white color
        try {
            data = document.querySelectorAll(".lang-chooser > div > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + "white" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // for .backLava background color: black and border box black and 1px
        try {
            data = document.querySelectorAll(".selectedLava > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "background-color: " + "black" + " !important;");
                data[i].setAttribute("style", "color: " + "white" + " !important;");
                // data[i].setAttribute("style", "border: " + "solid 1px white" + " !important;");
            }
            data = document.querySelectorAll(".selectedLava");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "background-color: " + "black" + " !important;");
                // data[i].setAttribute("style", "border: " + "solid 1px white" + " !important;");
            }
            try {
                data = document.querySelectorAll(".leftLava");
                for (var i = 0; i < data.length; i++) {
                    data[i].setAttribute("style", "background-color: " + "black" + " !important;");
                    // data[i].setAttribute("style", "border: " + "solid 1px white" + " !important;");
                }
            }
            catch (error) {
                console.log("err2", error)
            }
            try {
                data = document.querySelectorAll(".bottomLava");
                for (var i = 0; i < data.length; i++) {
                    data[i].setAttribute("style", "background-color: " + "black" + " !important;");
                    // data[i].setAttribute("style", "border: " + "solid 1px white" + " !important;");
                }
            }
            catch (error) {
                console.log("err2", error)
            }
            try {
                data = document.querySelectorAll(".rightLava > a");
                for (var i = 0; i < data.length; i++) {
                    data[i].setAttribute("style", "background-color: " + "black" + " !important;");
                    // data[i].setAttribute("style", "border: " + "solid 1px white" + " !important;");
                }
            }
            catch (error) {
                console.log("err2", error)
            }

            try {
                data = document.querySelectorAll(".backLava > a");
                for (var i = 0; i < data.length; i++) {
                    data[i].setAttribute("style", "background-color: " + "black" + " !important;");
                    // data[i].setAttribute("style", "border: " + ."solid 1px white" + " !important;");
                }
            }
            catch (error) {
                console.log("err2", error)
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // for .second-level-menu-list > li > a white color
        try {
            data = document.querySelectorAll(".second-level-menu-list > li > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + "white" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // for .prettyprint > span golden color
        try {
            data = document.querySelectorAll(".prettyprint > span");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + "yellow" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // for . topic-toggle-collapse highlight
        try {
            data = document.querySelectorAll(".topic-toggle-collapse");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + fdb + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // for .icon-file-text-alt white color
        try {
            data = document.querySelectorAll(".icon-file-text-alt");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + "rgb(136,136,136) " + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // for ._nameContent dark blue
        try {
            data = document.querySelectorAll("._nameContent");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + fdb + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // for .user-blac yellow color
        try {
            data = document.querySelectorAll(".user-black");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + "yellow" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .switchToMobile dark blue
        try {
            data = document.querySelectorAll(".switchToMobile");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + fdb + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // #footer > div > a color purple
        try {
            data = document.querySelectorAll("#footer > div > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + pnk + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .datatable background color btnb
        try {
            data = document.querySelectorAll(".datatable");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "background-color: " + btnb + " !important;");
            }
            data = document.querySelectorAll(".datatable > div");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "background-color: " + btnb + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .info > div > a link color
        try {
            data = document.querySelectorAll(".info > div > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }


        // .dark dark blue
        try {
            data = document.querySelectorAll(".dark > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + fdb + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .datatable > div > table > tbody > tr:nth-child(odd) > td background color btnb
        try {
            data = document.querySelectorAll(".datatable > div > table > tbody > tr:nth-child(even) > td");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "background-color: " + "black" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .datatable > div > table > tbody > tr > td > a background color btnb
        try {
            data = document.querySelectorAll(".datatable > div > table > tbody > tr > td > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + fdb + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .class="red-link" color white
        try {
            data = document.querySelectorAll(".red-link");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + "white" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .contestParticipantCountLinkMargin link color
        try {
            data = document.querySelectorAll(".contestParticipantCountLinkMargin > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .dark > div > a link color
        try {
            data = document.querySelectorAll(".dark > div > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .state > a link color
        try {
            data = document.querySelectorAll(".state > div > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // ._FilterByTagsFrame_addTagLink dark blue
        try {
            data = document.querySelectorAll("._FilterByTagsFrame_addTagLink");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .problems > tbody > tr:nthchild(even) > td > div > a link color
        try {
            data = document.querySelectorAll(".problems > tbody > tr:nth-child(odd) > td > div > a ");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .notice color grey
        try {
            data = document.querySelectorAll(".notice");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + greyclr + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .rtable > tbody > tr > th > a heading color
        try {
            data = document.querySelectorAll(".rtable > tbody > tr > th > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + bhc + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .sidebar-menu > ul > li > span > a dark blue
        try {
            data = document.querySelectorAll(".sidebar-menu > ul > li > span > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + fdb + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .rtable > tbody > tr > td > a link color
        try {
            data = document.querySelectorAll(".rtable > tbody > tr > td > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .state dark background color green
        try {
            data = document.querySelectorAll(".state dark");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "background-color: " + "black" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .msubsup > span > span > span white color
        try {
            data = document.querySelectorAll(".msubsup > span > span");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + "white" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }


        //         // .state background color green
        //         try {
        //             data = document.querySelectorAll(".state");
        //             for (var i = 0; i < data.length; i++) {
        //                 data[i].setAttribute("style", "background-color: " + "green" + " !important;");
        //             }
        //         }
        //         catch (error) {
        //             console.log("err2", error)
        //         }

        // .rtable > tbody > tr:nth child(even) > td link color
        try {
            data = document.querySelectorAll(".rtable > tbody > tr:nth-child(odd) > td");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "background-color: " + "rgb(57,57,57)" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .rtable > tbody > tr:nth child(even) > td > a link color
        try {
            data = document.querySelectorAll(".rtable > tbody > tr:nth-child(odd) > td > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + fdb + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .verdict-rejected red
        try {
            data = document.querySelectorAll(".verdict-rejected");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + rdc + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .verdict-format-judged red color
        try {
            data = document.querySelectorAll(".verdict-format-judged");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + rdc + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .status-frame-datatable tbody tr:nth-child(odd) td background color 57,57,58
        try {
            data = document.querySelectorAll(".status-frame-datatable tbody tr:nth-child(odd) td");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "background-color: " + "rgb(57,57,58)" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .info > ul > li > a link color
        try {
            data = document.querySelectorAll(".info > ul > li > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // #change-title-photo link color
        try {
            data = document.querySelectorAll("#change-title-photo");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .unset-title-photo link color
        try {
            data = document.querySelectorAll("#unset-title-photo");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + hgt + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .nav-links > li > a dark blue
        try {
            data = document.querySelectorAll(".nav-links > li > a");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + fdb + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .mn color red
        try {
            data = document.querySelectorAll(".math");
            for (var i = 0; i < data.length; i++) {
                // data[i].setAttribute("style", "-color: " + rdc + " !important;");
                data[i].setAttribute("style", "display:none;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }





















        // .user-legendary red
        try {
            data = document.querySelectorAll(".user-legendary");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + rdc + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }


        // for blue user
        try {
            data = document.querySelectorAll(".user-blue");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + fdb + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for green user
        try {
            data = document.querySelectorAll(".user-green");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + fdg + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for legend 1st char
        try {
            data = document.querySelectorAll(".legendary-user-first-letter");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + rdc + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for black character name
        try {
            data = document.querySelectorAll(".user-admin");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + bc + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for red color
        try {
            data = document.querySelectorAll(".user-red");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + rdc + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for orange color
        try {
            data = document.querySelectorAll(".user-orange");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + org + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for pink color
        try {
            data = document.querySelectorAll(".user-violet");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + pnk + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for light green
        try {
            data = document.querySelectorAll(".user-cyan");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + lgtgrn + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for grey color
        try {
            data = document.querySelectorAll(".user-gray");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + greyclr + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // for legend 1st char
        try {
            data = document.getElementsByClassName("legendary-user-first-letter");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + rdc + " !important;");
            }
            data = document.querySelectorAll(".user-legendary > span");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "text-shadow: " + "0px 0px 6px white" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }

        // .ace_line color white
        try {
            data = document.querySelectorAll(".ace_editor");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "background-color: " + "white" + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .Grandmaster red color
        try {
            data = document.querySelectorAll(".Grandmaster");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + rdc + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }
        // .Grandmaster red
        try {
            data = document.querySelectorAll(".Grandmaster");
            for (var i = 0; i < data.length; i++) {
                data[i].setAttribute("style", "color: " + rdc + " !important;");
            }
        }
        catch (error) {
            console.log("err2", error)
        }





    }
    func();

})();

const getTime = t => {
    var date = new Date(0);
    date.setSeconds(t);

    return date.toISOString().substr(11, 8);
};