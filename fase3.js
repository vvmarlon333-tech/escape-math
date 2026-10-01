/* =========================================================
   ESCAPE MATH — FASE 3
   PERSONAGEM COM O MESMO VISUAL DA FASE 1 E FASE 2
========================================================= */


/* =========================================================
   PERSONAGEM SELECIONADO
========================================================= */

const selectedCharacter =
    localStorage.getItem("escapeMathCharacter") || "LiviaSix";


/* =========================================================
   ELEMENTOS
========================================================= */

const player =
    document.getElementById("player");

const world =
    document.getElementById("world");

const gameArea =
    document.getElementById("gameArea");

const clock =
    document.getElementById("clock");

const hourHand =
    document.getElementById("hourHand");

const minuteHand =
    document.getElementById("minuteHand");

const door =
    document.getElementById("door");

const monster =
    document.getElementById("monster");

const interaction =
    document.getElementById("interaction");

const clockOverlay =
    document.getElementById("clockOverlay");

const closeClock =
    document.getElementById("closeClock");

const interactiveHourHand =
    document.getElementById("interactiveHourHand");

const interactiveMinuteHand =
    document.getElementById("interactiveMinuteHand");

const selectedTime =
    document.getElementById("selectedTime");

const confirmTime =
    document.getElementById("confirmTime");

const clockMessage =
    document.getElementById("clockMessage");

const successMessage =
    document.getElementById("successMessage");

const deathMessage =
    document.getElementById("deathMessage");

const restartButton =
    document.getElementById("restartButton");

const finishMessage =
    document.getElementById("finishMessage");


/* =========================================================
   CRIAÇÃO DO PERSONAGEM
   MESMA ESTRUTURA DA FASE 1 E FASE 2
========================================================= */

function createPlayerCharacter() {

    if (!player) {
        return;
    }


    player.innerHTML = "";

    player.className =
        "pixelCharacter";


    /* =====================================================
       PERSONAGEM MISTERIOSO
    ===================================================== */

    if (
        selectedCharacter ===
        "Personagem Misterioso"
    ) {

        player.classList.add(
            "mysterious"
        );

        player.innerHTML = `

            <div class="mysteriousHair"></div>

            <div class="mysteriousHead">

                <div class="mysteriousEye eyeLeft"></div>
                <div class="mysteriousEye eyeRight"></div>

            </div>

            <div class="mysteriousBody">

                <div class="mysteriousArm mysteriousArmLeft"></div>

                <div class="mysteriousArm mysteriousArmRight"></div>

                <div class="mysteriousLeg mysteriousLegLeft"></div>

                <div class="mysteriousLeg mysteriousLegRight"></div>

                <div class="mysteriousQuestion">?</div>

            </div>

        `;

        return;
    }


    /* =====================================================
       CLASSE DA PERSONAGEM
    ===================================================== */

    const characterClass = {

        "LiviaSix": "livia",

        "LaraSeven": "lara",

        "Tokio Kau": "tokio",

        "StarPri": "starpri",

        "Raiany": "raiany",

        "Alicce": "alicce",

        "MiniPri": "minipri"

    }[selectedCharacter];


    player.classList.add(
        characterClass || "livia"
    );


    /* =====================================================
       LIVIA
    ===================================================== */

    if (
        selectedCharacter ===
        "LiviaSix"
    ) {

        player.innerHTML = `

            <div class="hairBack"></div>

            <div class="head">

                <div class="hairFront"></div>

                <div class="eye eyeLeft"></div>
                <div class="eye eyeRight"></div>

                <div class="nose"></div>
                <div class="mouth"></div>

            </div>

            <div class="body">

                <div class="neck"></div>

                <div class="arm armLeft"></div>
                <div class="arm armRight"></div>

                <div class="hand handLeft"></div>
                <div class="hand handRight"></div>

                <div class="shirt"></div>

                <div class="short"></div>

                <div class="leg legLeft"></div>
                <div class="leg legRight"></div>

                <div class="shoe shoeLeft"></div>
                <div class="shoe shoeRight"></div>

            </div>

        `;

        return;
    }


    /* =====================================================
       LARA
    ===================================================== */

    if (
        selectedCharacter ===
        "LaraSeven"
    ) {

        player.innerHTML = `

            <div class="hairBack"></div>

            <div class="head">

                <div class="hairFront"></div>

                <div class="eye eyeLeft"></div>
                <div class="eye eyeRight"></div>

                <div class="nose"></div>
                <div class="mouth"></div>

            </div>

            <div class="body">

                <div class="neck"></div>

                <div class="arm armLeft"></div>
                <div class="arm armRight"></div>

                <div class="hand handLeft"></div>
                <div class="hand handRight"></div>

                <div class="shirt"></div>

                <div class="skirt"></div>

                <div class="leg legLeft"></div>
                <div class="leg legRight"></div>

                <div class="shoe shoeLeft"></div>
                <div class="shoe shoeRight"></div>

            </div>

        `;

        return;
    }


    /* =====================================================
       TOKIO
    ===================================================== */

    if (
        selectedCharacter ===
        "Tokio Kau"
    ) {

        player.innerHTML = `

            <div class="hairBack"></div>

            <div class="head">

                <div class="hairFront"></div>

                <div class="eye eyeLeft"></div>
                <div class="eye eyeRight"></div>

                <div class="nose"></div>
                <div class="mouth"></div>

            </div>

            <div class="body">

                <div class="neck"></div>

                <div class="arm armLeft"></div>
                <div class="arm armRight"></div>

                <div class="hand handLeft"></div>
                <div class="hand handRight"></div>

                <div class="shirt"></div>

                <div class="leg legLeft"></div>
                <div class="leg legRight"></div>

                <div class="shoe shoeLeft"></div>
                <div class="shoe shoeRight"></div>

            </div>

        `;

        return;
    }


    /* =====================================================
       STARPRI
    ===================================================== */

    if (
        selectedCharacter ===
        "StarPri"
    ) {

        player.innerHTML = `

            <div class="hairBack"></div>

            <div class="head">

                <div class="eye eyeLeft"></div>
                <div class="eye eyeRight"></div>

                <div class="nose"></div>
                <div class="mouth"></div>

            </div>

            <div class="body">

                <div class="neck"></div>

                <div class="arm armLeft"></div>
                <div class="arm armRight"></div>

                <div class="hand handLeft"></div>
                <div class="hand handRight"></div>

                <div class="dress"></div>

                <div class="leg legLeft"></div>
                <div class="leg legRight"></div>

                <div class="shoe shoeLeft"></div>
                <div class="shoe shoeRight"></div>

            </div>

        `;

        return;
    }


    /* =====================================================
       RAIANY
    ===================================================== */

    if (
        selectedCharacter ===
        "Raiany"
    ) {

        player.innerHTML = `

            <div class="hairBack"></div>

            <div class="head">

                <div class="eye eyeLeft"></div>
                <div class="eye eyeRight"></div>

                <div class="nose"></div>
                <div class="mouth"></div>

            </div>

            <div class="body">

                <div class="neck"></div>

                <div class="arm armLeft"></div>
                <div class="arm armRight"></div>

                <div class="hand handLeft"></div>
                <div class="hand handRight"></div>

                <div class="shirt"></div>

                <div class="leg legLeft"></div>
                <div class="leg legRight"></div>

                <div class="shoe shoeLeft"></div>
                <div class="shoe shoeRight"></div>

            </div>

        `;

        return;
    }


    /* =====================================================
       ALICCE
    ===================================================== */

    if (
        selectedCharacter ===
        "Alicce"
    ) {

        player.innerHTML = `

            <div class="hairBack"></div>

            <div class="head">

                <div class="hairFront"></div>

                <div class="purpleStreak"></div>

                <div class="eye eyeLeft"></div>
                <div class="eye eyeRight"></div>

                <div class="nose"></div>
                <div class="mouth"></div>

            </div>

            <div class="body">

                <div class="neck"></div>

                <div class="arm armLeft"></div>
                <div class="arm armRight"></div>

                <div class="hand handLeft"></div>
                <div class="hand handRight"></div>

                <div class="shirt"></div>

                <div class="leg legLeft"></div>
                <div class="leg legRight"></div>

                <div class="shoe shoeLeft"></div>
                <div class="shoe shoeRight"></div>

            </div>

        `;

        return;
    }


    /* =====================================================
       MINIPRI
    ===================================================== */

    if (
        selectedCharacter ===
        "MiniPri"
    ) {

        player.innerHTML = `

            <div class="hairBack"></div>

            <div class="head">

                <div class="hairFront"></div>

                <div class="eye eyeLeft"></div>
                <div class="eye eyeRight"></div>

                <div class="nose"></div>
                <div class="mouth"></div>

            </div>

            <div class="body">

                <div class="neck"></div>

                <div class="arm armLeft"></div>
                <div class="arm armRight"></div>

                <div class="hand handLeft"></div>
                <div class="hand handRight"></div>

                <div class="shirt"></div>

                <div class="leg legLeft"></div>
                <div class="leg legRight"></div>

                <div class="shoe shoeLeft"></div>
                <div class="shoe shoeRight"></div>

            </div>

        `;

    }

}


/* =========================================================
   ESTILO DO PERSONAGEM
   MESMO VISUAL DA FASE 1 E FASE 2
========================================================= */

const characterCSS =
    document.createElement("style");

characterCSS.id =
    "fase3CharacterStyle";

characterCSS.textContent = `

/* =====================================================
   BASE
===================================================== */

#player.pixelCharacter {

    position: absolute;

    left: 0;
    top: 0;

    width: 58px;
    height: 101px;

    transform: scale(0.60);

    transform-origin: top left;

    image-rendering: pixelated;

    z-index: 100;

}


/* =====================================================
   CABELO TRASEIRO
===================================================== */

#player.pixelCharacter .hairBack {

    position: absolute;

    left: 13px;
    top: 8px;

    width: 32px;
    height: 55px;

    background: #171313;

    z-index: 1;

}


/* =====================================================
   CABEÇA
===================================================== */

#player.pixelCharacter .head {

    position: absolute;

    left: 50%;
    top: 15px;

    width: 27px;
    height: 29px;

    transform: translateX(-50%);

    background: #d3a080;

    border: 2px solid #111;

    z-index: 5;

}


/* =====================================================
   CABELO FRONTAL
===================================================== */

#player.pixelCharacter .hairFront {

    position: absolute;

    left: -2px;
    top: -4px;

    width: 27px;
    height: 11px;

    background: #171313;

    z-index: 6;

}


/* =====================================================
   OLHOS
===================================================== */

#player.pixelCharacter .eye {

    position: absolute;

    top: 10px;

    width: 4px;
    height: 4px;

    background: #111;

    z-index: 8;

}

#player.pixelCharacter .eyeLeft {
    left: 5px;
}

#player.pixelCharacter .eyeRight {
    right: 5px;
}

#player.pixelCharacter .eye::after {

    content: "";

    position: absolute;

    width: 1px;
    height: 1px;

    left: 0;
    top: 0;

    background: #ddd;

}


/* =====================================================
   NARIZ
===================================================== */

#player.pixelCharacter .nose {

    position: absolute;

    left: 11px;
    top: 15px;

    width: 3px;
    height: 4px;

    background: #a86f59;

    z-index: 8;

}


/* =====================================================
   BOCA
===================================================== */

#player.pixelCharacter .mouth {

    position: absolute;

    left: 9px;
    top: 21px;

    width: 8px;
    height: 2px;

    background: #703d3d;

    z-index: 8;

}


/* =====================================================
   CORPO
===================================================== */

#player.pixelCharacter .body {

    position: absolute;

    left: 50%;
    top: 45px;

    width: 40px;
    height: 55px;

    transform: translateX(-50%);

    z-index: 2;

}


/* =====================================================
   PESCOÇO
===================================================== */

#player.pixelCharacter .neck {

    position: absolute;

    left: 16px;
    top: -4px;

    width: 9px;
    height: 8px;

    background: #c38d72;

    border-left: 2px solid #5d3c32;
    border-right: 2px solid #5d3c32;

    z-index: 3;

}


/* =====================================================
   BRAÇOS
===================================================== */

#player.pixelCharacter .arm {

    position: absolute;

    top: 4px;

    width: 7px;
    height: 25px;

    background: #b97f67;

    border: 2px solid #151515;

    z-index: 1;

}

#player.pixelCharacter .armLeft {
    left: 0;
}

#player.pixelCharacter .armRight {
    right: 0;
}


/* =====================================================
   MÃOS
===================================================== */

#player.pixelCharacter .hand {

    position: absolute;

    top: 26px;

    width: 7px;
    height: 7px;

    background: #c48c71;

    border: 1px solid #151515;

    z-index: 3;

}

#player.pixelCharacter .handLeft {
    left: 0;
}

#player.pixelCharacter .handRight {
    right: 0;
}


/* =====================================================
   CAMISA
===================================================== */

#player.pixelCharacter .shirt {

    position: absolute;

    left: 5px;
    top: 2px;

    width: 30px;
    height: 27px;

    background: #555;

    border: 2px solid #111;

    z-index: 2;

}


/* =====================================================
   PERNAS
===================================================== */

#player.pixelCharacter .leg {

    position: absolute;

    top: 28px;

    width: 11px;
    height: 29px;

    background: #292929;

    border: 2px solid #101010;

    z-index: 3;

}

#player.pixelCharacter .legLeft {
    left: 7px;
}

#player.pixelCharacter .legRight {
    right: 7px;
}


/* =====================================================
   SAPATOS
===================================================== */

#player.pixelCharacter .shoe {

    position: absolute;

    top: 53px;

    width: 14px;
    height: 7px;

    background: #0b0b0b;

    border: 1px solid #050505;

    z-index: 5;

}

#player.pixelCharacter .shoeLeft {
    left: 5px;
}

#player.pixelCharacter .shoeRight {
    right: 5px;
}


/* =====================================================
   LIVIA
===================================================== */

#player.pixelCharacter.livia .hairBack {

    left: 10px;
    top: 7px;

    width: 38px;
    height: 72px;

    background: #d8ae3d;

    box-shadow:
        -3px 10px 0 #c99e2e,
        3px 25px 0 #c99e2e,
        -2px 44px 0 #b88e25;

}

#player.pixelCharacter.livia .hairFront {

    background: #d8ae3d;

    box-shadow:
        4px 3px 0 #c99e2e,
        10px 1px 0 #c99e2e,
        16px 3px 0 #c99e2e;

}

#player.pixelCharacter.livia .head,
#player.pixelCharacter.livia .arm,
#player.pixelCharacter.livia .hand {

    background: #e2b18d;

}

#player.pixelCharacter.livia .shirt {

    background: #d95787;

    height: 25px;

}

#player.pixelCharacter.livia .shirt::before {

    content: "";

    position: absolute;

    left: 5px;
    top: 4px;

    width: 15px;
    height: 3px;

    background: #ef83a9;

}

#player.pixelCharacter.livia .short {

    position: absolute;

    left: 5px;
    top: 24px;

    width: 30px;
    height: 16px;

    background: #344c73;

    border: 2px solid #151b28;

    z-index: 4;

}

#player.pixelCharacter.livia .short::after {

    content: "";

    position: absolute;

    left: 13px;
    top: 0;

    width: 2px;
    height: 13px;

    background: #1d2b45;

}

#player.pixelCharacter.livia .leg {

    top: 38px;

    height: 19px;

    background: #e2b18d;

    border-color: #111;

}

#player.pixelCharacter.livia .legLeft {
    left: 8px;
}

#player.pixelCharacter.livia .legRight {
    right: 8px;
}

#player.pixelCharacter.livia .shoe {

    background: #eeeeee;

}


/* =====================================================
   LARA
===================================================== */

#player.pixelCharacter.lara .hairBack {

    left: 7px;
    top: 7px;

    width: 44px;
    height: 43px;

    background: #913c24;

    box-shadow:
        -5px 5px 0 #74301d,
        5px 5px 0 #74301d,
        -6px 14px 0 #6b2a1a,
        6px 14px 0 #6b2a1a,
        -5px 24px 0 #74301d,
        5px 24px 0 #74301d,
        -3px 34px 0 #6b2a1a,
        3px 34px 0 #6b2a1a;

}

#player.pixelCharacter.lara .hairFront {

    background: #913c24;

    box-shadow:
        5px 2px 0 #74301d,
        11px 1px 0 #913c24,
        17px 3px 0 #74301d;

}

#player.pixelCharacter.lara .head,
#player.pixelCharacter.lara .arm,
#player.pixelCharacter.lara .hand {

    background: #9b634c;

}

#player.pixelCharacter.lara .shirt {

    background: #a90e12;

    height: 25px;

}

#player.pixelCharacter.lara .skirt {

    position: absolute;

    left: 3px;
    top: 24px;

    width: 34px;
    height: 19px;

    background: #641015;

    border: 2px solid #280609;

    z-index: 4;

    clip-path:
        polygon(
            15% 0%,
            85% 0%,
            100% 100%,
            0% 100%
        );

}

#player.pixelCharacter.lara .leg {

    top: 40px;

    width: 10px;
    height: 17px;

    background: #80513f;

    border: 2px solid #111;

    z-index: 5;

}

#player.pixelCharacter.lara .legLeft {
    left: 8px;
}

#player.pixelCharacter.lara .legRight {
    right: 8px;
}

#player.pixelCharacter.lara .shoe {

    top: 53px;

    background: #242424;

}


/* =====================================================
   TOKIO
===================================================== */

#player.pixelCharacter.tokio .hairBack {

    left: 7px;
    top: 7px;

    width: 44px;
    height: 43px;

    background: #3b251a;

    box-shadow:
        -5px 5px 0 #2c1a12,
        5px 5px 0 #2c1a12,
        -6px 14px 0 #25160f,
        6px 14px 0 #25160f,
        -5px 24px 0 #2c1a12,
        5px 24px 0 #2c1a12,
        -3px 34px 0 #25160f,
        3px 34px 0 #25160f;

}

#player.pixelCharacter.tokio .hairFront {

    background: #3b251a;

    box-shadow:
        5px 2px 0 #2c1a12,
        11px 1px 0 #3b251a,
        17px 3px 0 #2c1a12;

}

#player.pixelCharacter.tokio .head,
#player.pixelCharacter.tokio .arm,
#player.pixelCharacter.tokio .hand {

    background: #a96f4f;

}

#player.pixelCharacter.tokio .shirt {

    left: 4px;
    top: 1px;

    width: 32px;
    height: 41px;

    background: #d76519;

    border-color: #71330d;

}

#player.pixelCharacter.tokio .shirt::before {

    content: "";

    position: absolute;

    left: 5px;
    top: -2px;

    width: 5px;
    height: 13px;

    background: #e27a25;

    box-shadow:
        15px 0 0 #e27a25;

}

#player.pixelCharacter.tokio .shirt::after {

    content: "";

    position: absolute;

    left: 10px;
    top: 20px;

    width: 10px;
    height: 7px;

    border: 1px solid #8b3b0b;

}

#player.pixelCharacter.tokio .leg {

    top: 39px;

    height: 18px;

    background: #d76519;

    border-color: #71330d;

}


/* =====================================================
   STARPRI
===================================================== */

#player.pixelCharacter.starpri .hairBack {

    left: 10px;
    top: 7px;

    width: 38px;
    height: 73px;

    background: #211918;

    box-shadow:
        -3px 14px 0 #171212,
        3px 30px 0 #171212,
        -2px 48px 0 #171212;

}

#player.pixelCharacter.starpri .hairFront {

    display: none;

}

#player.pixelCharacter.starpri .head,
#player.pixelCharacter.starpri .arm,
#player.pixelCharacter.starpri .hand {

    background: #dfb18f;

}

#player.pixelCharacter.starpri .dress {

    position: absolute;

    left: 3px;
    top: 1px;

    width: 34px;
    height: 45px;

    background: #9368b9;

    border: 2px solid #49325d;

    z-index: 2;

    clip-path:
        polygon(
            20% 0%,
            80% 0%,
            100% 100%,
            0% 100%
        );

}

#player.pixelCharacter.starpri .dress::before {

    content: "";

    position: absolute;

    left: 14px;
    top: 4px;

    width: 4px;
    height: 29px;

    background: #b991d3;

}

#player.pixelCharacter.starpri .leg {

    top: 43px;

    width: 10px;
    height: 14px;

    background: #dfb18f;

    border-color: #111;

    z-index: 4;

}

#player.pixelCharacter.starpri .legLeft {
    left: 9px;
}

#player.pixelCharacter.starpri .legRight {
    right: 9px;
}

#player.pixelCharacter.starpri .shoe {

    top: 54px;

    background: #352b3d;

}


/* =====================================================
   RAIANY
===================================================== */

#player.pixelCharacter.raiany .hairBack {

    left: 8px;
    top: 8px;

    width: 42px;
    height: 49px;

    background: #14100f;

    box-shadow:
        -4px 7px 0 #0c0a09,
        4px 7px 0 #0c0a09,
        -5px 17px 0 #0c0a09,
        5px 17px 0 #0c0a09,
        -4px 27px 0 #0c0a09,
        4px 27px 0 #0c0a09;

}

#player.pixelCharacter.raiany .hairFront {

    display: none;

}

#player.pixelCharacter.raiany .head,
#player.pixelCharacter.raiany .arm,
#player.pixelCharacter.raiany .hand {

    background: #704733;

}

#player.pixelCharacter.raiany .shirt {

    background: #eeeeee;

    height: 27px;

    border-color: #777;

}

#player.pixelCharacter.raiany .shirt::before {

    content: "";

    position: absolute;

    left: 12px;
    top: 4px;

    width: 4px;
    height: 16px;

    background: #c8c8c8;

}

#player.pixelCharacter.raiany .leg {

    top: 27px;

    height: 30px;

    background: #252525;

    border-color: #101010;

}

#player.pixelCharacter.raiany .shoe {

    background: #111;

}


/* =====================================================
   ALICCE
===================================================== */

#player.pixelCharacter.alicce .hairBack {

    left: 7px;
    top: 7px;

    width: 44px;
    height: 43px;

    background: #54352b;

    box-shadow:
        -5px 5px 0 #432820,
        5px 5px 0 #432820,
        -6px 14px 0 #432820,
        6px 14px 0 #432820,
        -5px 24px 0 #432820,
        5px 24px 0 #432820,
        -3px 34px 0 #432820,
        3px 34px 0 #432820;

}

#player.pixelCharacter.alicce .hairFront {

    background: #54352b;

    box-shadow:
        5px 2px 0 #432820,
        11px 1px 0 #54352b,
        17px 3px 0 #432820;

}

#player.pixelCharacter.alicce .purpleStreak {

    position: absolute;

    left: 4px;
    top: 0;

    width: 5px;
    height: 11px;

    background: #8b42b8;

    z-index: 10;

    box-shadow:
        1px 4px 0 #71349a,
        2px 8px 0 #9a4ac8;

}

#player.pixelCharacter.alicce .hairFront::after {

    content: "";

    position: absolute;

    right: 3px;
    top: 1px;

    width: 4px;
    height: 9px;

    background: #71349a;

    z-index: 10;

}

#player.pixelCharacter.alicce .head,
#player.pixelCharacter.alicce .arm,
#player.pixelCharacter.alicce .hand {

    background: #dfb18f;

}


/* =====================================================
   MINIPRI
===================================================== */

#player.pixelCharacter.minipri .hairBack {

    left: 6px;
    top: 5px;

    width: 46px;
    height: 76px;

    background: #604033;

    box-shadow:
        -5px 8px 0 #503329,
        5px 8px 0 #503329,
        -6px 21px 0 #503329,
        6px 21px 0 #503329,
        -6px 37px 0 #44291f,
        6px 37px 0 #44291f,
        -4px 53px 0 #3b241b;

}

#player.pixelCharacter.minipri .hairFront {

    background: #604033;

    box-shadow:
        5px 2px 0 #503329,
        11px 1px 0 #604033,
        17px 3px 0 #503329;

}

#player.pixelCharacter.minipri .head,
#player.pixelCharacter.minipri .neck,
#player.pixelCharacter.minipri .arm,
#player.pixelCharacter.minipri .hand {

    background: #805744;

}

#player.pixelCharacter.minipri .head {

    border-color: #241711;

}

#player.pixelCharacter.minipri .neck {

    border-left-color: #241711;
    border-right-color: #241711;

}

#player.pixelCharacter.minipri .shirt {

    background: #737373;

    height: 27px;

    border-color: #292929;

}

#player.pixelCharacter.minipri .shirt::before {

    content: "";

    position: absolute;

    left: 11px;
    top: 4px;

    width: 6px;
    height: 16px;

    background: #9a9a9a;

}

#player.pixelCharacter.minipri .leg {

    top: 27px;

    height: 30px;

    background: #4b4b4b;

    border-color: #202020;

}

#player.pixelCharacter.minipri .shoe {

    background: #303030;

    border-color: #151515;

}


/* =====================================================
   MISTERIOSO
===================================================== */

#player.pixelCharacter.mysterious {

    width: 58px;
    height: 101px;

}

#player.pixelCharacter.mysterious .mysteriousHair {

    position: absolute;

    left: 9px;
    top: 5px;

    width: 40px;
    height: 30px;

    background: #eeeeee;

    border: 2px solid #777;

    z-index: 6;

    box-shadow:
        -5px 7px 0 #d7d7d7,
        5px 5px 0 #d7d7d7,
        -3px 17px 0 #c8c8c8,
        3px 18px 0 #c8c8c8;

}

#player.pixelCharacter.mysterious .mysteriousHead {

    position: absolute;

    left: 50%;
    top: 18px;

    width: 29px;
    height: 27px;

    transform: translateX(-50%);

    background: #343434;

    border: 2px solid #111;

    z-index: 5;

}

#player.pixelCharacter.mysterious .mysteriousEye {

    position: absolute;

    top: 10px;

    width: 4px;
    height: 4px;

    background: #d9d9d9;

    box-shadow:
        0 0 4px rgba(255,255,255,.5);

}

#player.pixelCharacter.mysterious .mysteriousEye.eyeLeft {
    left: 5px;
}

#player.pixelCharacter.mysterious .mysteriousEye.eyeRight {
    right: 5px;
}

#player.pixelCharacter.mysterious .mysteriousBody {

    position: absolute;

    left: 50%;
    top: 44px;

    width: 38px;
    height: 57px;

    transform: translateX(-50%);

    background: #343434;

    border: 2px solid #111;

    z-index: 3;

}

#player.pixelCharacter.mysterious .mysteriousArm {

    position: absolute;

    top: 2px;

    width: 8px;
    height: 29px;

    background: #343434;

    border: 2px solid #111;

}

#player.pixelCharacter.mysterious .mysteriousArmLeft {
    left: -10px;
}

#player.pixelCharacter.mysterious .mysteriousArmRight {
    right: -10px;
}

#player.pixelCharacter.mysterious .mysteriousLeg {

    position: absolute;

    top: 39px;

    width: 13px;
    height: 18px;

    background: #343434;

    border: 2px solid #111;

}

#player.pixelCharacter.mysterious .mysteriousLegLeft {
    left: 5px;
}

#player.pixelCharacter.mysterious .mysteriousLegRight {
    right: 5px;
}

#player.pixelCharacter.mysterious .mysteriousQuestion {

    position: absolute;

    left: 50%;
    top: 9px;

    transform: translateX(-50%);

    color: #d8d8d8;

    font-family:
        "Courier New",
        monospace;

    font-size: 25px;

    font-weight: bold;

    line-height: 1;

    text-shadow:
        0 0 5px #000;

}

`;

document.head.appendChild(
    characterCSS
);


/* =========================================================
   INICIA PERSONAGEM
========================================================= */

createPlayerCharacter();


/* =========================================================
   CONFIGURAÇÃO
========================================================= */

const MOVE_SPEED = 5;
const JUMP_FORCE = 14;
const GRAVITY = 0.6;

const PLAYER_WIDTH = 38;
const PLAYER_HEIGHT = 62;

const GROUND_HEIGHT = 100;

const WORLD_WIDTH = 2400;

const MONSTER_SPEED = 1.7;


/* =========================================================
   ESTADO
========================================================= */

let playerX = 150;
let playerY = 0;

let previousPlayerY = 0;

let velocityY = 0;

let grounded = true;

let paused = false;
let dead = false;
let phaseFinished = false;

let doorUnlocked = false;


/* =========================================================
   MONSTRO
========================================================= */

let monsterX = 1220;
let monsterDirection = 1;

const MONSTER_MIN_X = 1100;
const MONSTER_MAX_X = 1480;


/* =========================================================
   RELÓGIO
========================================================= */

/*
    Hora inicial: 12:00

    hourValue:
    0 = 12
    1 = 1
    ...
    11 = 11

    minuteValue:
    0 a 59
*/

let hourValue = 0;
let minuteValue = 0;


/* =========================================================
   TECLAS
========================================================= */

const keys = {};


document.addEventListener(
    "keydown",
    function(event) {

        keys[
            event.key.toLowerCase()
        ] = true;


        if (
            event.key === " " ||
            event.key.startsWith("Arrow")
        ) {

            event.preventDefault();

        }


        /*
            Controle do relógio por teclado
        */

        if (
            clockOverlay.classList.contains(
                "active"
            )
        ) {

            if (
                event.key === "ArrowUp"
            ) {

                hourValue =
                    (hourValue + 1) % 12;

                updateClock();

            }


            if (
                event.key === "ArrowDown"
            ) {

                hourValue =
                    (hourValue + 11) % 12;

                updateClock();

            }


            if (
                event.key === "ArrowRight"
            ) {

                minuteValue =
                    (minuteValue + 1) % 60;

                updateClock();

            }


            if (
                event.key === "ArrowLeft"
            ) {

                minuteValue =
                    (minuteValue + 59) % 60;

                updateClock();

            }

        }

    }
);


document.addEventListener(
    "keyup",
    function(event) {

        keys[
            event.key.toLowerCase()
        ] = false;

    }
);


/* =========================================================
   RESET
========================================================= */

function resetPlayer() {

    playerX = 150;

    playerY =
        gameArea.clientHeight -
        GROUND_HEIGHT -
        PLAYER_HEIGHT;

    previousPlayerY = playerY;

    velocityY = 0;

    grounded = true;

}


resetPlayer();


/* =========================================================
   PLATAFORMAS
========================================================= */

const platforms = [

    ".platform1",
    ".platform2",
    ".platform3",
    ".platform4",
    ".platform5",
    ".platform6",
    ".platform7",
    ".clockPlatform1",
    ".clockPlatform2"

].map(
    selector =>
        document.querySelector(selector)
).filter(Boolean);


/* =========================================================
   MOVIMENTO
========================================================= */

function movePlayer() {

    if (paused) {
        return;
    }


    previousPlayerY = playerY;


    /*
        MOVIMENTO HORIZONTAL
    */

    if (
        keys["d"] ||
        keys["arrowright"]
    ) {

        playerX += MOVE_SPEED;

    }


    if (
        keys["a"] ||
        keys["arrowleft"]
    ) {

        playerX -= MOVE_SPEED;

    }


    if (playerX < 0) {

        playerX = 0;

    }


    if (
        playerX >
        WORLD_WIDTH -
        PLAYER_WIDTH
    ) {

        playerX =
            WORLD_WIDTH -
            PLAYER_WIDTH;

    }


    /*
        PULO
    */

    if (
        (
            keys[" "] ||
            keys["w"] ||
            keys["arrowup"]
        ) &&
        grounded
    ) {

        velocityY =
            -JUMP_FORCE;

        grounded = false;

    }


    /*
        GRAVIDADE
    */

    velocityY += GRAVITY;

    playerY += velocityY;


    /*
        CHÃO
    */

    const floorY =
        gameArea.clientHeight -
        GROUND_HEIGHT -
        PLAYER_HEIGHT;


    grounded = false;


    if (playerY >= floorY) {

        playerY = floorY;

        velocityY = 0;

        grounded = true;

    }


    /*
        COLISÃO COM PLATAFORMAS
    */

    checkPlatforms();

}


/* =========================================================
   PLATAFORMAS
========================================================= */

function checkPlatforms() {

    const playerBottom =
        playerY +
        PLAYER_HEIGHT;

    const playerLeft =
        playerX + 5;

    const playerRight =
        playerX +
        PLAYER_WIDTH -
        5;


    platforms.forEach(
        function(platform) {

            const platformLeft =
                platform.offsetLeft;

            const platformRight =
                platformLeft +
                platform.offsetWidth;

            const platformTop =
                platform.offsetTop;


            const horizontalCollision =
                playerRight >
                    platformLeft &&
                playerLeft <
                    platformRight;


            const falling =
                velocityY >= 0;


            const crossedPlatform =
                previousPlayerY +
                    PLAYER_HEIGHT
                    <=
                    platformTop + 5 &&
                playerBottom >=
                    platformTop;


            if (
                horizontalCollision &&
                falling &&
                crossedPlatform
            ) {

                playerY =
                    platformTop -
                    PLAYER_HEIGHT;

                velocityY = 0;

                grounded = true;

            }

        }
    );

}


/* =========================================================
   CÂMERA
========================================================= */

function updateCamera() {

    const screenWidth =
        gameArea.clientWidth;


    let cameraX =
        playerX -
        screenWidth / 2 +
        PLAYER_WIDTH / 2;


    if (cameraX < 0) {

        cameraX = 0;

    }


    const maxCamera =
        WORLD_WIDTH -
        screenWidth;


    if (cameraX > maxCamera) {

        cameraX = maxCamera;

    }


    world.style.left =
        (-cameraX) + "px";

}


/* =========================================================
   PLAYER
========================================================= */

function drawPlayer() {

    player.style.left =
        playerX + "px";

    player.style.top =
        playerY + "px";

}


/* =========================================================
   MONSTRO
========================================================= */

function moveMonster() {

    if (paused) {
        return;
    }


    monsterX +=
        MONSTER_SPEED *
        monsterDirection;


    if (
        monsterX >=
        MONSTER_MAX_X
    ) {

        monsterDirection = -1;

    }


    if (
        monsterX <=
        MONSTER_MIN_X
    ) {

        monsterDirection = 1;

    }


    monster.style.left =
        monsterX + "px";

}


/* =========================================================
   COLISÃO MONSTRO
========================================================= */

function checkMonsterCollision() {

    if (
        dead ||
        paused
    ) {

        return;

    }


    const monsterTop =
        gameArea.clientHeight -
        GROUND_HEIGHT -
        monster.offsetHeight;


    const playerBottom =
        playerY +
        PLAYER_HEIGHT;


    /*
        Permite passar por cima do monstro.
    */

    if (
        playerBottom <
        monsterTop + 12
    ) {

        return;

    }


    const playerLeft =
        playerX + 7;

    const playerRight =
        playerX +
        PLAYER_WIDTH -
        7;


    const monsterLeft =
        monsterX + 5;

    const monsterRight =
        monsterX +
        monster.offsetWidth -
        5;


    const playerTop =
        playerY + 15;


    const monsterCollisionTop =
        monsterTop + 8;


    const monsterCollisionBottom =
        monsterTop +
        monster.offsetHeight;


    const collision =

        playerRight >
        monsterLeft &&

        playerLeft <
        monsterRight &&

        playerBottom >
        monsterCollisionTop &&

        playerTop <
        monsterCollisionBottom;


    if (collision) {

        die();

    }

}


/* =========================================================
   INTERAÇÃO COM RELÓGIO
========================================================= */

function nearClock() {

    const clockX =
        clock.offsetLeft;

    const clockY =
        clock.offsetTop;


    const playerCenterX =
        playerX +
        PLAYER_WIDTH / 2;

    const playerCenterY =
        playerY +
        PLAYER_HEIGHT / 2;


    const clockCenterX =
        clockX +
        clock.offsetWidth / 2;

    const clockCenterY =
        clockY +
        clock.offsetHeight / 2;


    const distanceX =
        Math.abs(
            playerCenterX -
            clockCenterX
        );

    const distanceY =
        Math.abs(
            playerCenterY -
            clockCenterY
        );


    return (
        distanceX < 100 &&
        distanceY < 100
    );

}


/* =========================================================
   INTERAÇÃO
========================================================= */

function updateInteraction() {

    if (
        nearClock() &&
        !paused &&
        !doorUnlocked
    ) {

        interaction.style.display =
            "flex";

    } else {

        interaction.style.display =
            "none";

    }

}


/* =========================================================
   ABRIR RELÓGIO
========================================================= */

function openClock() {

    if (!nearClock()) {
        return;
    }

    if (doorUnlocked) {
        return;
    }


    paused = true;


    clockOverlay.classList.add(
        "active"
    );


    clockMessage.textContent =
        "";

    clockMessage.className =
        "";


    updateClock();

}


function closeClockPanel() {

    clockOverlay.classList.remove(
        "active"
    );

    paused = false;

}


closeClock.addEventListener(
    "click",
    closeClockPanel
);


/* =========================================================
   TECLA E
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key.toLowerCase() === "e" &&
            !clockOverlay.classList.contains(
                "active"
            )
        ) {

            openClock();

        }

    }
);


/* =========================================================
   RELÓGIO — VISUAL
========================================================= */

function updateClock() {

    /*
        12 posições = 360°
        Cada hora = 30°

        Minutos:
        60 minutos = 360°
        Cada minuto = 6°
    */


    const hourAngle =
        (
            hourValue * 30
        ) +
        (
            minuteValue * 0.5
        );


    const minuteAngle =
        minuteValue * 6;


    interactiveHourHand.style.transform =
        `rotate(${hourAngle}deg)`;


    interactiveMinuteHand.style.transform =
        `rotate(${minuteAngle}deg)`;


    /*
        Relógio visual no cenário
    */

    hourHand.style.transform =
        `rotate(${hourAngle}deg)`;


    minuteHand.style.transform =
        `rotate(${minuteAngle}deg)`;


    const displayHour =
        hourValue === 0
            ? 12
            : hourValue;


    const displayMinute =
        String(minuteValue)
        .padStart(2, "0");


    selectedTime.textContent =
        `${String(displayHour).padStart(2, "0")}:${displayMinute}`;

}


/* =========================================================
   CONFIRMAR HORÁRIO
========================================================= */

confirmTime.addEventListener(
    "click",
    function() {

        /*
            7:00
        */

        const correct =
            hourValue === 7 &&
            minuteValue === 0;


        if (correct) {

            clockMessage.textContent =
                "✓ HORÁRIO CORRETO.";

            clockMessage.className =
                "success";


            doorUnlocked = true;


            door.classList.add(
                "unlocked"
            );


            setTimeout(
                function() {

                    clockOverlay.classList.remove(
                        "active"
                    );

                    paused = false;


                    successMessage.classList.add(
                        "active"
                    );


                    setTimeout(
                        function() {

                            successMessage.classList.remove(
                                "active"
                            );

                        },
                        1700
                    );

                },
                900
            );


        } else {

            clockMessage.textContent =
                "✕ HORÁRIO INCORRETO. AJUSTE O PONTEIRO.";

            clockMessage.className =
                "";

        }

    }
);


/* =========================================================
   ARRASTAR PONTEIROS COM MOUSE
========================================================= */

let draggingHand = null;


/*
    Descobre o ângulo do clique
    em relação ao centro do relógio.
*/

function getClockAngle(event) {

    const rect =
        document
        .querySelector(
            ".interactiveClockFace"
        )
        .getBoundingClientRect();


    const centerX =
        rect.left +
        rect.width / 2;


    const centerY =
        rect.top +
        rect.height / 2;


    const x =
        event.clientX -
        centerX;


    const y =
        event.clientY -
        centerY;


    let angle =
        Math.atan2(y, x) *
        180 /
        Math.PI;


    /*
        Converte:
        -90° = 12
         0°  = 3
        90°  = 6
        180° = 9
    */

    angle += 90;


    if (angle < 0) {

        angle += 360;

    }


    return angle;

}


/* =========================================================
   SELEÇÃO DO PONTEIRO
========================================================= */

document
    .querySelector(
        ".interactiveClockFace"
    )
    .addEventListener(
        "mousedown",
        function(event) {

            const angle =
                getClockAngle(event);


            /*
                Distância aproximada do centro.

                Clique mais próximo do centro:
                ponteiro das horas.

                Clique mais distante:
                ponteiro dos minutos.
            */

            const rect =
                this.getBoundingClientRect();


            const centerX =
                rect.left +
                rect.width / 2;


            const centerY =
                rect.top +
                rect.height / 2;


            const dx =
                event.clientX -
                centerX;


            const dy =
                event.clientY -
                centerY;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 75) {

                draggingHand =
                    "hour";

            } else {

                draggingHand =
                    "minute";

            }


            updateHandFromAngle(
                angle
            );

        }
    );


document.addEventListener(
    "mousemove",
    function(event) {

        if (!draggingHand) {
            return;
        }


        const angle =
            getClockAngle(event);


        updateHandFromAngle(
            angle
        );

    }
);


document.addEventListener(
    "mouseup",
    function() {

        draggingHand = null;

    }
);


/* =========================================================
   ATUALIZAR PONTEIRO PELO ÂNGULO
========================================================= */

function updateHandFromAngle(angle) {

    if (
        draggingHand ===
        "minute"
    ) {

        let minute =
            Math.round(
                angle / 6
            );


        if (minute >= 60) {

            minute = 0;

        }


        minuteValue =
            minute;

    }


    if (
        draggingHand ===
        "hour"
    ) {

        /*
            O ponteiro das horas também acompanha
            os minutos, portanto calculamos a posição
            aproximada da hora.
        */

        let hour =
            Math.round(
                angle / 30
            );


        if (hour >= 12) {

            hour = 0;

        }


        hourValue =
            hour;

    }


    updateClock();

}


/* =========================================================
   MORTE
========================================================= */

function die() {

    if (dead) {
        return;
    }


    dead = true;

    paused = true;


    deathMessage.classList.add(
        "active"
    );

}


/* =========================================================
   REINICIAR
========================================================= */

restartButton.addEventListener(
    "click",
    function() {

        dead = false;

        paused = false;

        phaseFinished = false;

        doorUnlocked = false;


        monsterX = 1220;

        monsterDirection = 1;


        monster.style.left =
            monsterX + "px";


        door.classList.remove(
            "unlocked"
        );


        deathMessage.classList.remove(
            "active"
        );


        clockOverlay.classList.remove(
            "active"
        );


        hourValue = 0;

        minuteValue = 0;


        updateClock();


        resetPlayer();

    }
);


/* =========================================================
   PORTA
========================================================= */

function checkDoor() {

    if (!doorUnlocked) {
        return;
    }


    const doorX =
        door.offsetLeft;


    if (
        playerX +
        PLAYER_WIDTH >
        doorX
    ) {

        finishPhase();

    }

}


/* =========================================================
   FINAL DA FASE
========================================================= */

function finishPhase() {

    if (phaseFinished) {
        return;
    }


    phaseFinished = true;

    paused = true;


    finishMessage.classList.add(
        "active"
    );


    setTimeout(
        function() {

            window.location.href =
                "fase4.html";

        },
        1800
    );

}


/* =========================================================
   LOOP
========================================================= */

function gameLoop() {

    movePlayer();

    moveMonster();

    drawPlayer();

    updateCamera();

    updateInteraction();

    checkMonsterCollision();

    checkDoor();


    requestAnimationFrame(
        gameLoop
    );

}


updateClock();

gameLoop();


/* =========================================================
   RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function() {

        const floorY =
            gameArea.clientHeight -
            GROUND_HEIGHT -
            PLAYER_HEIGHT;


        if (playerY > floorY) {

            playerY = floorY;

            velocityY = 0;

            grounded = true;

        }

    }
);document.getElementById("restartDeath").onclick = () => {
    window.location.href = "fase1.html";
};restartFinish.addEventListener("click", () => {
    window.location.href = "fase1.html";
});

document.getElementById("restartDeath").onclick = () => {
    window.location.href = "fase1.html";
};