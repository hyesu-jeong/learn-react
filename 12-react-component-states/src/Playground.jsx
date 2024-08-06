// import ExpandableText from '@/components/ExpandableText/ExpandableText';
// import AvatarListPage from '@/pages/AvatarListPage';
// import Counter from '@/components/Counter/Counter';
// import CounterClass from '@/components/Counter/Counter.class';
import { UsersPage } from './pages/users/UsersPage';

/* -------------- ExpandableText -------------- */
// function Playground() {
//   return (
//     <>
//       <ExpandableText>
//         사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 형사피고인은
//         유죄의 판결이 확정될 때까지는 무죄로 추정된다.
//       </ExpandableText>
//       <ExpandableText>
//         사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 형사피고인은
//         유죄의 판결이 확정될 때까지는 무죄로 추정된다. 모든 국민은 행위시의
//         법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한
//         범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 행위시의 법률에 의하여
//         범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여
//         거듭 처벌받지 아니한다. 모든 국민은 고문을 받지 아니하며, 형사상
//         자기에게 불리한 진술을 강요당하지 아니한다.
//       </ExpandableText>
//       <ExpandableText limit={80}>
//         사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 형사피고인은
//         유죄의 판결이 확정될 때까지는 무죄로 추정된다. 모든 국민은 행위시의
//         법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한
//         범죄에 대하여 거듭 처벌받지 아니한다. 모든 국민은 행위시의 법률에 의하여
//         범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여
//         거듭 처벌받지 아니한다. 모든 국민은 고문을 받지 아니하며, 형사상
//         자기에게 불리한 진술을 강요당하지 아니한다.
//       </ExpandableText>
//     </>
//   );
// }

/* ------------------ Avatar ------------------ */
// function Playground() {
//   return (
//     <>
//       <AvatarListPage />
//     </>
//   );
// }

/* ------------------ Counter ----------------- */
// function Playground() {
//   return (
//     <>
//       <h1>Counter Function</h1>
//       <Counter min={-50} count={3} max={50} />
//       <Counter count={10} step={4} min={5} max={20} />
//       <h1>Counter Class</h1>
//       <CounterClass min={9} count={10} step={10} />
//     </>
//   );
// }

/* ------------------ Users ----------------- */
function Playground() {
  return (
    <>
      <h1>Users</h1>
      <UsersPage />
    </>
  );
}

export default Playground;
