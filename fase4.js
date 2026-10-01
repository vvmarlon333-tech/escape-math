/* =========================================================
   ESCAPE MATH
   FASE 04
========================================================= */


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const WORLD_WIDTH = 2400;

const PLAYER_WIDTH = 38;
const PLAYER_HEIGHT = 62;

const MOVE_SPEED = 5;
const JUMP_FORCE = 14;
const GRAVITY = 0.65;

const MONSTER_WIDTH = 65;
const MONSTER_HEIGHT = 75;
const MONSTER_SPEED = 1.25;

const START_TIME = 90;


/* =========================================================
   ELEMENTOS
========================================================= */

const game =
    document.getElementById("game");

const gameArea =
    document.getElementById("gameArea");

const world =
    document.getElementById("world");

const player =
    document.getElementById("player");

const monster =
    document.getElementById("monster");

const door =
    document.getElementById("door");

const timerElement =
    document.getElementById("timer");

const systemsCount =
    document.getElementById("systemsCount");

const interaction =
    document.getElementById("interaction");

const interactionText =
    document.getElementById("interactionText");

const mathOverlay =
    document.getElementById("mathOverlay");

const mathTitle =
    document.getElementById("mathTitle");

const mathDescription =
    document.getElementById("mathDescription");

const miniGame =
    document.getElementById("miniGame");

const mathMessage =
    document.getElementById("mathMessage");

const miniSystemNumber =
    document.getElementById("miniSystemNumber");

const closeMath =
    document.getElementById("closeMath");

const deathMessage =
    document.getElementById("deathMessage");

const deathText =
    document.getElementById("deathText");

const finishMessage =
    document.getElementById("finishMessage");

const restartDeath =
    document.getElementById("restartDeath");

const restartFinish =
    document.getElementById("restartFinish");


/* =========================================================
   ESTADO
========================================================= */

let playerX = 70;
let playerY = 0;

let velocityY = 0;

let onGround = false;

let movingLeft = false;
let movingRight = false;

let cameraX = 0;

let timeLeft = START_TIME;

let gameRunning = true;

let challengeOpen = false;

let currentStation = null;

let completedStations = new Set();


/* =========================================================
   ESTAÇÕES
========================================================= */

const stations = {

    numbers: {
        title: "SISTEMA 01 — NÚMEROS",

        description:
            "Complete a sequência descobrindo o próximo termo.",

        number: "01"
    },

    geometry: {
        title: "SISTEMA 02 — GEOMETRIA",

        description:
            "Construa a área do quadrado usando a grade.",

        number: "02"
    },

    balance: {
        title: "SISTEMA 03 — EQUAÇÃO",

        description:
            "Manipule a equação até descobrir o valor de x.",

        number: "03"
    },

    sequence: {
        title: "SISTEMA 04 — REGRA",

        description:
            "Descubra a regra da sequência e escolha o próximo termo.",

        number: "04"
    }

};


/* =========================================================
   PERSONAGEM
========================================================= */

const characterNames = [
    "mysterious",
    "livia",
    "lara",
    "tokio",
    "starpri",
    "raiany",
    "alicce",
    "minipri"
];


function getSelectedCharacter() {

    const saved =
        localStorage.getItem(
            "escapeMathCharacter"
        );


    if (
        saved === "LiviaSix"
    ) {
        return "livia";
    }

    if (
        saved === "LaraSeven"
    ) {
        return "lara";
    }

    if (
        saved === "Tokio Kau"
    ) {
        return "tokio";
    }

    if (
        saved === "StarPri"
    ) {
        return "starpri";
    }

    if (
        saved === "Raiany"
    ) {
        return "raiany";
    }

    if (
        saved === "Alicce"
    ) {
        return "alicce";
    }

    if (
        saved === "MiniPri"
    ) {
        return "minipri";
    }

    if (
        saved === "mysterious" ||
        saved === "Personagem Misterioso"
    ) {
        return "mysterious";
    }

    return "mysterious";
}


/* =========================================================
   CRIAR PERSONAGEM
========================================================= */

function createPlayerCharacter() {

    const character =
        getSelectedCharacter();


    player.className =
        "pixelCharacter " +
        character;


    if (
        character ===
        "mysterious"
    ) {

        player.innerHTML = `

            <div class="mysteriousHair"></div>

            <div class="mysteriousHead">

                <div
                    class="mysteriousEye eyeLeft"
                ></div>

                <div
                    class="mysteriousEye eyeRight"
                ></div>

            </div>

            <div class="mysteriousBody">

                <div
                    class="
                        mysteriousArm
                        mysteriousArmLeft
                    "
                ></div>

                <div
                    class="
                        mysteriousArm
                        mysteriousArmRight
                    "
                ></div>

                <div
                    class="
                        mysteriousLeg
                        mysteriousLegLeft
                    "
                ></div>

                <div
                    class="
                        mysteriousLeg
                        mysteriousLegRight
                    "
                ></div>

                <div class="mysteriousQuestion">
                    ?
                </div>

            </div>

        `;

        return;
    }


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


/* =========================================================
   PLATAFORMAS
========================================================= */

function getPlatforms() {

    const areaHeight =
        gameArea.clientHeight;


    return [

        {
            x: 260,
            y: areaHeight - 210,
            width: 190,
            height: 20
        },

        {
            x: 520,
            y: areaHeight - 285,
            width: 180,
            height: 20
        },

        {
            x: 770,
            y: areaHeight - 215,
            width: 190,
            height: 20
        },

        {
            x: 1020,
            y: areaHeight - 310,
            width: 185,
            height: 20
        },

        {
            x: 1260,
            y: areaHeight - 225,
            width: 190,
            height: 20
        },

        {
            x: 1510,
            y: areaHeight - 330,
            width: 190,
            height: 20
        },

        {
            x: 1740,
            y: areaHeight - 235,
            width: 190,
            height: 20
        }

    ];
}


/* =========================================================
   POSIÇÃO
========================================================= */

function resetPlayerPosition() {

    const areaHeight =
        gameArea.clientHeight;


    playerX = 70;

    playerY =
        areaHeight -
        100 -
        PLAYER_HEIGHT;

    velocityY = 0;

    onGround = true;
}


/* =========================================================
   MOVIMENTO
========================================================= */

function clampPlayer() {

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
}


function movePlayer() {

    if (
        !gameRunning ||
        challengeOpen
    ) {
        return;
    }


    if (movingLeft) {
        playerX -= MOVE_SPEED;
    }

    if (movingRight) {
        playerX += MOVE_SPEED;
    }


    clampPlayer();


    const oldY =
        playerY;


    velocityY += GRAVITY;

    playerY += velocityY;


    const platforms =
        getPlatforms();


    const groundY =
        gameArea.clientHeight -
        100 -
        PLAYER_HEIGHT;


    onGround = false;


    if (
        playerY >= groundY
    ) {

        playerY = groundY;

        velocityY = 0;

        onGround = true;
    }


    if (
        velocityY >= 0
    ) {

        for (
            const platform of platforms
        ) {

            const playerLeft =
                playerX;

            const playerRight =
                playerX +
                PLAYER_WIDTH;

            const playerBottom =
                playerY +
                PLAYER_HEIGHT;

            const oldBottom =
                oldY +
                PLAYER_HEIGHT;


            const horizontalCollision =
                playerRight >
                    platform.x &&
                playerLeft <
                    platform.x +
                    platform.width;


            const verticalCollision =
                oldBottom <=
                    platform.y &&
                playerBottom >=
                    platform.y;


            if (
                horizontalCollision &&
                verticalCollision
            ) {

                playerY =
                    platform.y -
                    PLAYER_HEIGHT;

                velocityY = 0;

                onGround = true;

                break;
            }
        }
    }


    renderPlayer();
}


function jump() {

    if (
        !gameRunning ||
        challengeOpen
    ) {
        return;
    }


    if (onGround) {

        velocityY =
            -JUMP_FORCE;

        onGround = false;
    }
}


function renderPlayer() {

    player.style.left =
        playerX + "px";

    player.style.top =
        playerY + "px";
}


/* =========================================================
   MONSTRO
========================================================= */

let monsterX = 1220;


function updateMonster() {

    if (
        !gameRunning ||
        challengeOpen
    ) {
        return;
    }


    const playerCenter =
        playerX +
        PLAYER_WIDTH / 2;


    const monsterCenter =
        monsterX +
        MONSTER_WIDTH / 2;


    if (
        playerCenter >
        monsterCenter
    ) {

        monsterX +=
            MONSTER_SPEED;

    } else {

        monsterX -=
            MONSTER_SPEED;
    }


    monsterX =
        Math.max(
            0,
            Math.min(
                WORLD_WIDTH -
                MONSTER_WIDTH,
                monsterX
            )
        );


    monster.style.left =
        monsterX + "px";


    checkMonsterCollision();
}


function checkMonsterCollision() {

    const playerLeft =
        playerX;

    const playerRight =
        playerX +
        PLAYER_WIDTH;

    const playerTop =
        playerY;

    const playerBottom =
        playerY +
        PLAYER_HEIGHT;


    const monsterTop =
        gameArea.clientHeight -
        100 -
        MONSTER_HEIGHT;


    const monsterBottom =
        monsterTop +
        MONSTER_HEIGHT;


    const collision =
        playerRight >
            monsterX &&
        playerLeft <
            monsterX +
            MONSTER_WIDTH &&
        playerBottom >
            monsterTop &&
        playerTop <
            monsterBottom;


    if (collision) {

        die(
            "O monstro alcançou você."
        );
    }
}


/* =========================================================
   CÂMERA
========================================================= */

function updateCamera() {

    const viewportWidth =
        gameArea.clientWidth;


    cameraX =
        playerX -
        viewportWidth * .42;


    cameraX =
        Math.max(
            0,
            Math.min(
                WORLD_WIDTH -
                viewportWidth,
                cameraX
            )
        );


    world.style.transform =
        `translateX(${-cameraX}px)`;
}


/* =========================================================
   DISTÂNCIA
========================================================= */

function horizontalDistance(
    objectX,
    objectWidth
) {

    const playerCenter =
        playerX +
        PLAYER_WIDTH / 2;


    const objectCenter =
        objectX +
        objectWidth / 2;


    return Math.abs(
        playerCenter -
        objectCenter
    );
}


/* =========================================================
   INTERAÇÃO
========================================================= */

function updateInteraction() {

    if (
        !gameRunning ||
        challengeOpen
    ) {

        interaction.style.display =
            "none";

        return;
    }


    const stationElements =
        document.querySelectorAll(
            ".mathStation"
        );


    for (
        const station
        of stationElements
    ) {

        const stationName =
            station.dataset.station;


        if (
            completedStations.has(
                stationName
            )
        ) {

            continue;
        }


        const stationX =
            parseFloat(
                getComputedStyle(
                    station
                ).left
            );


        const distance =
            horizontalDistance(
                stationX,
                150
            );


        if (
            distance < 115
        ) {

            interaction.style.display =
                "flex";


            interactionText.textContent =
                "E — RESOLVER SISTEMA " +
                station.querySelector(
                    ".stationScreen span"
                ).textContent;


            return;
        }
    }


    const doorDistance =
        horizontalDistance(
            2100,
            125
        );


    if (
        completedStations.size === 4 &&
        doorDistance < 135
    ) {

        interaction.style.display =
            "flex";


        interactionText.textContent =
            "E — ABRIR PORTA";


        return;
    }


    interaction.style.display =
        "none";
}


/* =========================================================
   ABRIR SISTEMA
========================================================= */

function openChallenge(
    stationName
) {

    if (
        challengeOpen ||
        completedStations.has(
            stationName
        )
    ) {

        return;
    }


    const data =
        stations[stationName];


    if (!data) {
        return;
    }


    currentStation =
        stationName;


    challengeOpen = true;


    miniSystemNumber.textContent =
        data.number;


    mathTitle.textContent =
        data.title;


    mathDescription.textContent =
        data.description;


    mathMessage.textContent =
        "";


    mathMessage.className =
        "";


    buildMiniGame(
        stationName
    );


    mathOverlay.classList.add(
        "active"
    );
}


/* =========================================================
   MINIJOGOS
========================================================= */

function buildMiniGame(type) {

    if (
        type === "numbers"
    ) {
        buildNumbersGame();
    }

    if (
        type === "geometry"
    ) {
        buildGeometryGame();
    }

    if (
        type === "balance"
    ) {
        buildEquationGame();
    }

    if (
        type === "sequence"
    ) {
        buildRuleGame();
    }
}


/* =========================================================
   SISTEMA 01
========================================================= */

function buildNumbersGame() {

    miniGame.innerHTML = `

        <div class="sequenceGame">

            <div class="answerTitle">
                COMPLETE A SEQUÊNCIA
            </div>

            <div class="sequenceNumbers">

                <div class="sequenceNumber">
                    4
                </div>

                <div class="sequenceArrow">
                    →
                </div>

                <div class="sequenceNumber">
                    8
                </div>

                <div class="sequenceArrow">
                    →
                </div>

                <div class="sequenceNumber">
                    12
                </div>

                <div class="sequenceArrow">
                    →
                </div>

                <div class="sequenceNumber">
                    16
                </div>

                <div class="sequenceArrow">
                    →
                </div>

            </div>

            <div
                id="numberDrop"
                class="dropZone"
            >
                ?
            </div>

            <div class="answerTitle">
                ESCOLHA O PRÓXIMO NÚMERO
            </div>

            <div class="answerPieces">

                <div
                    class="answerPiece"
                    data-value="18"
                >
                    18
                </div>

                <div
                    class="answerPiece"
                    data-value="20"
                >
                    20
                </div>

                <div
                    class="answerPiece"
                    data-value="22"
                >
                    22
                </div>

                <div
                    class="answerPiece"
                    data-value="24"
                >
                    24
                </div>

            </div>

        </div>

    `;


    const drop =
        document.getElementById(
            "numberDrop"
        );


    document
        .querySelectorAll(
            ".answerPiece"
        )
        .forEach(piece => {

            piece.addEventListener(
                "click",
                () => {

                    const value =
                        piece.dataset.value;


                    drop.textContent =
                        value;


                    if (
                        value === "20"
                    ) {

                        completeCurrentSystem();

                    } else {

                        wrongAnswer(
                            "Essa peça não completa a sequência."
                        );


                        setTimeout(
                            () => {

                                if (
                                    challengeOpen
                                ) {

                                    drop.textContent =
                                        "?";
                                }

                            },
                            700
                        );
                    }

                }
            );

        });
}


/* =========================================================
   SISTEMA 02
========================================================= */

function buildGeometryGame() {

    miniGame.innerHTML = `

        <div class="geometryGame">

            <div class="geometryQuestion">

                O espaço disponível possui
                <strong>8 × 8</strong> quadrados.

                <br><br>

                Construa uma região quadrada
                com <strong>área 36</strong>.

                <br>

        

            </div>

            <div class="squareDiagram">

                <div class="squareSide top">
                    8 quadrados
                </div>

                <div class="squareSide left">
                    8 quadrados
                </div>

            </div>

            <div class="answerTitle">
                CONSTRUA UM QUADRADO DE ÁREA 36
            </div>

            <div
                id="geometryTiles"
                class="geometryTiles"
            ></div>

            <div class="geometryResult">

                ÁREA CONSTRUÍDA:

                <strong>

                    <span id="tileCount">
                        0
                    </span>

                    / 36

                </strong>

            </div>

        </div>

    `;


    const container =
        document.getElementById(
            "geometryTiles"
        );


    const counter =
        document.getElementById(
            "tileCount"
        );


    let selectedTiles = [];


    /*
       CRIA UMA GRADE 8 × 8
       TOTAL: 64 QUADRADOS
    */

    for (
        let i = 0;
        i < 64;
        i++
    ) {

        const tile =
            document.createElement(
                "div"
            );


        tile.className =
            "geometryTile";


        tile.dataset.index =
            i;


        tile.addEventListener(
            "click",
            () => {

                if (
                    tile.classList.contains(
                        "active"
                    )
                ) {

                    tile.classList.remove(
                        "active"
                    );

                    selectedTiles =
                        selectedTiles.filter(
                            item =>
                                item !== i
                        );

                } else {

                    tile.classList.add(
                        "active"
                    );

                    selectedTiles.push(i);

                }


                counter.textContent =
                    selectedTiles.length;


                /*
                   SÓ CONCLUI SE OS 36
                   QUADRADOS FORMAREM
                   UM BLOCO 6 × 6
                */

                if (
                    selectedTiles.length === 36
                ) {

                    const rows =
                        selectedTiles.map(
                            index =>
                                Math.floor(
                                    index / 8
                                )
                        );

                    const cols =
                        selectedTiles.map(
                            index =>
                                index % 8
                        );


                    const minRow =
                        Math.min(...rows);

                    const maxRow =
                        Math.max(...rows);

                    const minCol =
                        Math.min(...cols);

                    const maxCol =
                        Math.max(...cols);


                    const height =
                        maxRow -
                        minRow +
                        1;

                    const width =
                        maxCol -
                        minCol +
                        1;


                    /*
                       6 × 6 = 36
                    */

                    if (
                        height === 6 &&
                        width === 6
                    ) {

                        completeCurrentSystem();

                    } else {

                        wrongAnswer(
                            "A área é 36, mas a região precisa formar um quadrado de 6 × 6."
                        );

                    }

                }

            }
        );


        container.appendChild(
            tile
        );

    }

}

/* =========================================================
   SISTEMA 03
========================================================= */

function buildEquationGame() {

    miniGame.innerHTML = `

        <div class="equationGame">

            <div class="equationDisplay">

                <div
                    class="eqBlock"
                    id="eqLeft"
                >
                    3x + 2
                </div>

                <div class="eqSign">
                    =
                </div>

                <div
                    class="eqBlock"
                    id="eqRight"
                >
                    14
                </div>

            </div>

            <div class="balanceInfo">

                A equação precisa permanecer
                equilibrada nos dois lados.

            </div>

            <div class="equationActions">

                <button
                    class="eqAction"
                    id="removeTwo"
                >
                    − 2 DOS DOIS LADOS
                </button>

                <button
                    class="eqAction"
                    id="divideThree"
                >
                    ÷ 3 DOS DOIS LADOS
                </button>

            </div>

            <div
                class="equationHint"
                id="equationHint"
            >
                Qual operação deve ser feita primeiro?
            </div>

        </div>

    `;


    let stage = 0;


    const left =
        document.getElementById(
            "eqLeft"
        );


    const right =
        document.getElementById(
            "eqRight"
        );


    const hint =
        document.getElementById(
            "equationHint"
        );


    document
        .getElementById(
            "removeTwo"
        )
        .addEventListener(
            "click",
            () => {

                if (
                    stage === 0
                ) {

                    left.textContent =
                        "3x";

                    right.textContent =
                        "12";

                    stage = 1;

                    hint.textContent =
                        "Agora elimine o coeficiente 3.";

                } else {

                    wrongAnswer(
                        "Essa operação já foi realizada."
                    );

                }

            }
        );


    document
        .getElementById(
            "divideThree"
        )
        .addEventListener(
            "click",
            () => {

                if (
                    stage === 1
                ) {

                    left.textContent =
                        "x";

                    right.textContent =
                        "4";

                    stage = 2;

                    hint.textContent =
                        "Equação resolvida.";

                    completeCurrentSystem();

                } else if (
                    stage === 0
                ) {

                    wrongAnswer(
                        "Primeiro retire o +2 dos dois lados."
                    );

                }

            }
        );
}


/* =========================================================
   SISTEMA 04
========================================================= */

function buildRuleGame() {

    miniGame.innerHTML = `

        <div class="ruleGame">

            <div class="answerTitle">
                DESCUBRA A REGRA
            </div>

            <div class="ruleSequence">

                <div class="ruleNumber">
                    2
                </div>

                <div>→</div>

                <div class="ruleNumber">
                    6
                </div>

                <div>→</div>

                <div class="ruleNumber">
                    18
                </div>

                <div>→</div>

                <div class="ruleNumber">
                    54
                </div>

                <div>→</div>

                <div
                    class="
                        ruleNumber
                        ruleQuestion
                    "
                >
                    ?
                </div>

            </div>

            <div class="answerTitle">
                QUAL É A REGRA?
            </div>

            <div class="ruleMultipliers">

                <button
                    class="multiplier"
                    data-rule="2"
                >
                    ×2
                </button>

                <button
                    class="multiplier"
                    data-rule="3"
                >
                    ×3
                </button>

                <button
                    class="multiplier"
                    data-rule="4"
                >
                    ×4
                </button>

                <button
                    class="multiplier"
                    data-rule="5"
                >
                    ×5
                </button>

            </div>

            <div class="answerTitle">
                AGORA ESCOLHA O PRÓXIMO TERMO
            </div>

            <div class="ruleOptions">

                <button
                    class="ruleOption"
                    data-value="108"
                >
                    108
                </button>

                <button
                    class="ruleOption"
                    data-value="126"
                >
                    126
                </button>

                <button
                    class="ruleOption"
                    data-value="144"
                >
                    144
                </button>

                <button
                    class="ruleOption"
                    data-value="162"
                >
                    162
                </button>

            </div>

        </div>

    `;


    let ruleCorrect = false;


    document
        .querySelectorAll(
            ".multiplier"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".multiplier"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "selected"
                                )
                        );


                    button.classList.add(
                        "selected"
                    );


                    if (
                        button.dataset.rule ===
                        "3"
                    ) {

                        ruleCorrect = true;

                        mathMessage.textContent =
                            "REGRA IDENTIFICADA: ×3";

                    } else {

                        ruleCorrect = false;

                        wrongAnswer(
                            "Observe a relação entre cada termo."
                        );

                    }

                }
            );

        });


    document
        .querySelectorAll(
            ".ruleOption"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    if (
                        !ruleCorrect
                    ) {

                        wrongAnswer(
                            "Descubra primeiro a regra."
                        );

                        return;
                    }


                    if (
                        button.dataset.value ===
                        "162"
                    ) {

                        completeCurrentSystem();

                    } else {

                        wrongAnswer(
                            "A regra ×3 ainda não foi aplicada corretamente."
                        );

                    }

                }
            );

        });
}


/* =========================================================
   RESPOSTA ERRADA
========================================================= */

function wrongAnswer(
    message
) {

    mathMessage.className = "";

    mathMessage.textContent =
        "✕ " + message;
}


/* =========================================================
   SISTEMA CONCLUÍDO
========================================================= */

function completeCurrentSystem() {

    if (
        !currentStation
    ) {
        return;
    }


    if (
        completedStations.has(
            currentStation
        )
    ) {
        return;
    }


    completedStations.add(
        currentStation
    );


    const station =
        document.querySelector(
            `[data-station="${currentStation}"]`
        );


    if (station) {

        station.classList.add(
            "completed"
        );


        const status =
            station.querySelector(
                ".stationStatus"
            );


        if (status) {

            status.textContent =
                "COMPLETE";
        }

    }


    systemsCount.textContent =
        `${completedStations.size}/4`;


    mathMessage.className =
        "success";


    mathMessage.textContent =
        "✓ SISTEMA RESTAURADO";


    setTimeout(
        () => {

            closeChallengePanel();

            checkAllSystems();

        },
        900
    );
}


/* =========================================================
   FECHAR DESAFIO
========================================================= */

function closeChallengePanel() {

    mathOverlay.classList.remove(
        "active"
    );


    challengeOpen = false;

    currentStation = null;

    miniGame.innerHTML = "";
}


closeMath.addEventListener(
    "click",
    closeChallengePanel
);


/* =========================================================
   TODOS OS SISTEMAS
========================================================= */

function checkAllSystems() {

    if (
        completedStations.size === 4
    ) {

        door.classList.add(
            "unlocked"
        );

    }
}


/* =========================================================
   PORTA
========================================================= */

function tryDoor() {

    if (
        completedStations.size !== 4
    ) {

        return;
    }


    const distance =
        horizontalDistance(
            2100,
            125
        );


    if (
        distance < 135
    ) {

        finishGame();
    }
}


/* =========================================================
   MORTE
========================================================= */

function die(
    reason
) {

    if (
        !gameRunning
    ) {
        return;
    }


    gameRunning = false;

    movingLeft = false;
    movingRight = false;


    deathText.textContent =
        reason;


    deathMessage.classList.add(
        "active"
    );
}


/* =========================================================
   FINAL
========================================================= */

function finishGame() {

    if (
        !gameRunning
    ) {
        return;
    }


    gameRunning = false;

    movingLeft = false;
    movingRight = false;


    finishMessage.classList.add(
        "active"
    );
}


/* =========================================================
   TIMER
========================================================= */

/* =========================================================
   TIMER
========================================================= */

function updateTimer() {

    if (
        !gameRunning
    ) {
        return;
    }


    timeLeft--;


    if (
        timeLeft < 0
    ) {

        timeLeft = 0;
    }


    timerElement.textContent =
        timeLeft;


    if (
        timeLeft <= 10
    ) {

        timerElement.style.color =
            "#c51616";

        timerElement.style.textShadow =
            "0 0 8px rgba(255,0,0,.45)";
    }


    if (
        timeLeft <= 0
    ) {

        die(
            "O tempo acabou."
        );
    }
}

/* =========================================================
   TECLADO
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const key =
            event.key.toLowerCase();


        if (
            key === "a" ||
            key === "arrowleft"
        ) {

            movingLeft = true;

            event.preventDefault();
        }


        if (
            key === "d" ||
            key === "arrowright"
        ) {

            movingRight = true;

            event.preventDefault();
        }


        if (
            key === " " ||
            key === "spacebar"
        ) {

            jump();

            event.preventDefault();
        }


        if (
            key === "escape"
        ) {

            if (
                challengeOpen
            ) {

                closeChallengePanel();
            }

            return;
        }


        if (
            key === "e"
        ) {

            if (
                !gameRunning ||
                challengeOpen
            ) {

                return;
            }


            interact();
        }

    }
);


document.addEventListener(
    "keyup",
    event => {

        const key =
            event.key.toLowerCase();


        if (
            key === "a" ||
            key === "arrowleft"
        ) {

            movingLeft = false;
        }


        if (
            key === "d" ||
            key === "arrowright"
        ) {

            movingRight = false;
        }

    }
);


/* =========================================================
   INTERAGIR
========================================================= */

function interact() {

    const stationElements =
        document.querySelectorAll(
            ".mathStation"
        );


    for (
        const station
        of stationElements
    ) {

        const stationName =
            station.dataset.station;


        if (
            completedStations.has(
                stationName
            )
        ) {

            continue;
        }


        const stationX =
            parseFloat(
                getComputedStyle(
                    station
                ).left
            );


        const distance =
            horizontalDistance(
                stationX,
                150
            );


        if (
            distance < 115
        ) {

            openChallenge(
                stationName
            );

            return;
        }

    }


    tryDoor();
}


/* =========================================================
   BOTÕES
========================================================= */

restartDeath.addEventListener(
    "click",
    () => {

        window.location.href =
            "fase1.html";
    }
);


restartFinish.addEventListener(
    "click",
    () => {

        window.location.href =
            "fase1.html";
    }
);


/* =========================================================
   RESIZE
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            !challengeOpen
        ) {

            resetPlayerPosition();

            renderPlayer();

            updateCamera();
        }

    }
);


/* =========================================================
   LOOP
========================================================= */

function gameLoop() {

    movePlayer();

    updateMonster();

    updateCamera();

    updateInteraction();

    requestAnimationFrame(
        gameLoop
    );
}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function initializeGame() {

    createPlayerCharacter();

    resetPlayerPosition();

    renderPlayer();


    monsterX = 1220;

    monster.style.left =
        monsterX + "px";


    systemsCount.textContent =
        "0/4";


    updateCamera();


    setInterval(
        updateTimer,
        1000
    );


    requestAnimationFrame(
        gameLoop
    );
}


initializeGame();