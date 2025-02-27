document.addEventListener("DOMContentLoaded", () => {
    let turn = "X";
    let isGameOver = false;

    const changeTurn = () => {
        return turn === "X" ? "0" : "X";
    };

    const checkWin = () => {
        const boxtexts = document.getElementsByClassName("boxtext");
        const wins = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        wins.forEach(e => {
            if (
                boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
                boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
                boxtexts[e[0]].innerText !== ''
            ) {
                document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!";
                isGameOver = true;
                document.querySelector('.imgbox').style.display = "block"; // Show win image
            }
        });
    };

    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', () => {
            if (boxtext.innerText === '' && !isGameOver) {
                boxtext.innerText = turn;
                checkWin();
                if (!isGameOver) {
                    turn = changeTurn();
                    document.querySelector('.info').innerText = "Turn for " + turn;
                }
            }
        });
    });

    document.querySelector('.reset').addEventListener('click', () => {
        Array.from(document.getElementsByClassName('boxtext')).forEach(e => {
            e.innerText = '';
        });
        turn = "X";
        isGameOver = false;
        document.querySelector('.info').innerText = "Turn for " + turn;
        document.querySelector('.imgbox').style.display = "none";
    });
});
