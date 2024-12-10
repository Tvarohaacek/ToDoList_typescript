
    // export function getScore(m_score1, m_score2) {
    //     let score = "";
    //     let tempScore = 0;
    //
    //
    //
    //     if (m_score1 === m_score2) {
    //         switch (m_score1) {
    //             case 0:
    //                 score = "Love-All";
    //                 break;
    //             case 1:
    //                 score = "Fifteen-All";
    //                 break;
    //             case 2:
    //                 score = "Thirty-All";
    //                 break;
    //             default:
    //                 score = "Deuce";
    //                 break;
    //         }
    //     } else if (m_score1 >= 4 || m_score2 >= 4) {
    //         const minusResult = m_score1 - m_score2;
    //         if (minusResult === 1) {
    //             score = "Advantage player1";
    //         } else if (minusResult === -1) {
    //             score = "Advantage player2";
    //         } else if (minusResult >= 2) {
    //             score = "Win for player1";
    //         } else {
    //             score = "Win for player2";
    //         }
    //     } else {
    //         for (let i = 1; i < 3; i++) {
    //             if (i === 1) {
    //                 tempScore = m_score1;
    //             } else {
    //                 score += "-";
    //                 tempScore = m_score2;
    //             }
    //             switch (tempScore) {
    //                 case 0:
    //                     score += "Love";
    //                     break;
    //                 case 1:
    //                     score += "Fifteen";
    //                     break;
    //                 case 2:
    //                     score += "Thirty";
    //                     break;
    //                 case 3:
    //                     score += "Forty";
    //                     break;
    //             }
    //         }
    //     }
    //     return score;
    // }

    function IfDraw(score1:number):string{
    const LoveAll :string = "Love-All";
    const FifteenAll :string = "Fifteen-All";
    const ThirtyALl :string = "Thirty-All";
    const Deuce :string = "Deuce-All";
            return [
                LoveAll,
                FifteenAll,
                ThirtyALl,
                Deuce
            ][Math.min(score1, 3)];

    }

    function AdvOrWin(score1:number, score2:number):string{

            const minusResult :number = score1 - score2;
            const AdvPlayer1 :number = 1;
            const AdvPlayer2 :number = -1;
            const WinPlayer1 :number = 2;

            if (minusResult === AdvPlayer1) return "Advantage player1";
            if (minusResult === AdvPlayer2) return "Advantage player2";
            if (minusResult >= WinPlayer1) return "Win for player1";
            return "Win for player2";

    }

    function ScoreStatus(score1:number, score2:number):string{

        const Love :string = "Love";
        const Fifteen :string = "Fifteen";
        const Thirty :string = "Thirty";
        const Forty :string = "Forty";

        const scoreToText :(score :number) => string = (score :number):string =>
            [Love, Fifteen, Thirty, Forty][score] || "";

        return `${scoreToText(score1)}-${scoreToText(score2)}`;
    }


    export function getScore ( score1 : number, score2 :number):string{

        if (score1 === score2){
            return IfDraw(score1);
        }

        else if (score1 >= 4 || score2 >= 4) {
           return AdvOrWin(score1, score2);
        }

        else {
            return ScoreStatus(score1, score2);
        }

    }


