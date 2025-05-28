import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

export type AlertBoxProps = {
  type?: 'success' | 'error' | 'info';
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const typeStyles = {
  info: 'bg-yellow-200 text-gray-primary',
  error: 'bg-red-100 text-gray-primary',
  success: 'bg-gray-100 text-gray-primary',
}

const iconMap = {
  info: <ExclamationCircleIcon className="w-5 h-5 text-yellow-500" />,
  error: <XCircleIcon className="w-5 h-5 text-red-600" />,
  success: <CheckCircleIcon className="w-5 h-5 text-green-600" />,
}

const AlertBox = ({type = 'info', title, description, actions, onClose, className, ...res}: AlertBoxProps) => {
  return (
    <div
      className={classNames(
        'p-4 rounded-md flex justify-between items-start gap-4',
        typeStyles[type],
        className
      )}
      {...res}
    >
      <div className="flex gap-2 flex-1">
        <div className="mt-1">{iconMap[type]}</div>
        <div className="flex flex-col gap-1 text-sm">
          {title && <p className="font-bold">{title}</p>}
          {description && <p>{description}</p>}
          {actions && <div className="flex gap-2 mt-1">{actions}</div>}
        </div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}

export default AlertBox;