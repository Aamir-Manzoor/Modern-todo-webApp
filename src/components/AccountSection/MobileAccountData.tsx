// import React, {useState} from "react"
// import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import {menusActions} from '../../store/Menu.store'
// import { ElseIf, If } from "../Service/condition";


// export default function MobileAccountData({BackState, BackSet} : {BackState: boolean, BackSet: any}){
//     const menuOpen = useAppSelector((state) => state.menu.menuAccountOpened);

//     const dispatch = useAppDispatch();

//     const [GameState, GameSet] = useState({game: "none", parentDiv: "DontShow"})
//     GameHooks.GameState = GameState
//     GameHooks.GameSet = GameSet


//     const closeMenuHandler = () => {
//         dispatch(menusActions.closeMenuAccount());
//     };

//     function ClassSwitcher(Bar: string){
//         switch (Bar) {
//             case 'none':
//                 return 'BarDisable'
//             case 'GameBar':
//                 return 'GameBar'
//             case 'DontShow':
//                 return 'DontShow'
//             case 'Show':
//                 return 'Show'            
//         }
//     }

//     return (
//         <div>
//             <If condition={GameHooks.GameState.game === "2048"}>
//                 <div className={ClassSwitcher(GameHooks.GameState.parentDiv)}>
//                     <GamePuzzle/>
//                 </div>
//             </If>
//         </div>
//     )
// }