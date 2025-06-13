import { Spinner } from "@/presentation/components/ui/spinner";

const LoadingPage = ({ logo }: { logo?: boolean }) => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col justify-center items-center gap-2">
          {logo !== false && (
            <img
              src="/assets/ikame-logo.svg"
              alt="logo_image"
              width={200}
              height={80}
            />
          )}

          <Spinner size={"lg"} />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
