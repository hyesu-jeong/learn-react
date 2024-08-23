import { userSignUp } from '@/api/user';
import { AppButton, AppForm, AppInput } from '@/components';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import toast from 'react-hot-toast';
import { VscOctoface } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';
import S from './style.module.css';

function SignUpUser() {
  useDocumentTitle('사용자 회원가입');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const username = formData.get('username');
      const email = formData.get('email');
      const password = formData.get('password');
      const passwordConfirm = formData.get('passwordConfirm');

      if (username.trim().length === 0) {
        alert('사용자 이름 입력이 필요합니다.');
        return;
      }

      if (password !== passwordConfirm) {
        alert('패스워드와 패스워드 확인이 다릅니다.');
        return;
      }

      await userSignUp(username, email, password);

      // 성공적으로 회원가입이 되었으니 사용자에게 토스트를 띄움
      toast('회원 가입이 성공적으로 수행되었습니다.', {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          position: 'top-right',
          color: '#fff',
        },
      });

      // 회원가입 후, 로그인 페이지로 이동
      navigate('/signin-user');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main id="page" className={S.component}>
      <h1 className="headline">사용자 회원가입</h1>

      <div className="description">
        <p>사용자가 서비스에 회원가입 하기 위한 폼의 기능을 구현합니다.</p>
        <p>
          <a
            href="https://pocketbase.io"
            rel="noreferrer noopener"
            target="_blank"
          >
            PocketBase
          </a>{' '}
          백엔드 솔루션 인증 시스템을 사용해 회원가입 하세요.
        </p>
      </div>

      <AppForm onSubmit={handleSignUp}>
        <AppInput
          name="username"
          required
          label="닉네임"
          placeholder="yamoo9"
        />
        <AppInput
          name="email"
          email
          required
          label="이메일"
          placeholder="yamoo9@naver.com"
        />
        <AppInput
          name="password"
          password
          required
          label="패스워드"
          placeholder="영어,숫자 조합 6자리 이상"
        />
        <AppInput
          name="passwordConfirm"
          password
          required
          label="패스워드 확인"
          placeholder="입력한 패스워드와 동일한 값"
        />
        <AppButton submit icon={<VscOctoface />}>
          회원가입
        </AppButton>
      </AppForm>

      <div className="description" style={{ marginBlockStart: 8 }}>
        <p style={{ inlineSize: '100%', textAlign: 'center' }}>
          <Link to="/signin-user">로그인</Link> 페이지로 이동
        </p>
      </div>
    </main>
  );
}

export default SignUpUser;
