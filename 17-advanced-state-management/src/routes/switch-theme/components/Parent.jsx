import { useTheme } from '@/contexts/theme';
import Child from './Child';
import S from './style.module.css';

function Parent() {
  const { theme } = useTheme();

  const {
    Parent: { background, label },
  } = theme;

  const boxStyles = {
    backgroundColor: background,
    borderColor: label,
  };

  const labelStyles = {
    color: label,
  };

  return (
    <div className={S.box} style={boxStyles}>
      <strong className={S.label} style={labelStyles}>
        Parent
      </strong>
      <Child />
    </div>
  );
}

export default Parent;
