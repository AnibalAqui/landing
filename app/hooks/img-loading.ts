import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useState } from "react";

export const useImage = ({ fileName }: { fileName: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [img, setImg] = useState<StaticImport | null>(null);

  useEffect(() => {
    const loadImg = async () => {
      try {
        setLoading(false);
        const img = await import("../../public/assets/" + fileName);
        setImg(img);
      } catch (e) {
        throw Error(`Could not import image ${fileName}: Error; ${e} `);
      } finally {
        setLoading(false);
      }
    };

    loadImg();
  }, [fileName]);

  return {
    loading,
    img,
  };
};
