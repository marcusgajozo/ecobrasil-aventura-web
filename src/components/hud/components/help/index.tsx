import { useModalManagerStore } from "@/lib/stores/use-modal-manager-store";

export const Help = () => {
  const handleOpenModal = useModalManagerStore(
    (state) => state.handleOpenModal
  );
  return (
    <div
      className="text-white text-3xl font-primary cursor-pointer"
      onClick={() => handleOpenModal("help")}
    >
      Precisa de ajuda?
    </div>
  );
};
