import classNames from 'classnames';
import AvatarIcon from './AvatarIcon';
import AvatarImage from './AvatarImage';

export type AvatarProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  image?: string;
  description?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const avatarSizeMap = {
  xs: 'w-5 h-5',
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-9 h-9',
};

const Avatar = ({
  image,
  description = '',
  size = 'md',
  className,
  ...res
}: AvatarProps) => {
  const avatarSizeMapClass = avatarSizeMap[size] || avatarSizeMap.xs;

  const AvatarContent = image ? (
    <AvatarImage src={image} altDescription={description} />
  ) : (
    <AvatarIcon />
  );

  return (
    <div
      className={classNames(
        'relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400',
        avatarSizeMapClass,
      )}
      {...res}
    >
      {AvatarContent}
    </div>
  );
};

export default Avatar;
