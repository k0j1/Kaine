import React from 'react';
import { Dish3DViewer } from './Dish3DViewer';

interface Dish3DModalProps {
  isOpen: boolean;
  dishId?: string;
  onClose: () => void;
}

/**
 * 3D 360° 料理確認モーダル
 * 写真やメニューからワンクリックでフルスクリーンの3D回転検査を起動します。
 */
export const Dish3DModal: React.FC<Dish3DModalProps> = ({ isOpen, dishId, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 md:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Dish3DViewer 
          initialDishId={dishId} 
          isModal={true} 
          onClose={onClose} 
        />
      </div>
    </div>
  );
};

export default Dish3DModal;
