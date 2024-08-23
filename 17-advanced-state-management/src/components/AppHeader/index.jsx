import pb from '@/api/pb';
import { AUTH_KEY, useAuth } from '@/contexts/auth';
import { removeStorageData } from '@/utils';
import toast from 'react-hot-toast';
import { IoLogoReact } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import S from './style.module.css';

const DUMMY_IMAGE_URL = 'https://placehold.co/20x20?text=photo';

function AppHeader() {
  const { authInfo, resetAuth } = useAuth();
  const navigate = useNavigate();

  const user = authInfo?.user;

  const handleSignOut = () => {
    // 컨텍스트 사용자 정보 초기화
    resetAuth();
    // 포켓베이스 로그아웃 기능 실행
    pb.authStore.clear();
    // 로컬 스토리지에 저장된 인증 정보 값 삭제
    removeStorageData(AUTH_KEY);

    toast('로그아웃되었습니다.', {
      icon: '🥹',
      style: {
        borderRadius: '10px',
        background: '#333',
        position: 'top-right',
        color: '#fff',
      },
    });

    // 홈페이지로 이동
    navigate('/');
  };

  let profileImageUrl = DUMMY_IMAGE_URL;

  if (user?.avatar) {
    profileImageUrl = pb.files.getUrl(user, user.avatar);
  }

  return (
    <header className={S.component}>
      <Link to="/" className={S.homeLink} aria-label="홈">
        <IoLogoReact />
      </Link>
      {user && (
        <div className={S.wrapper}>
          <div className={S.userInfo}>
            <img src={profileImageUrl} alt="" />
            {user.username}
          </div>
          <button
            type="button"
            className="rounded-full px-4 py-2 bg-indigo-700 text-white font-bold"
            onClick={handleSignOut}
          >
            로그아웃
          </button>
        </div>
      )}
    </header>
  );
}

export default AppHeader;
