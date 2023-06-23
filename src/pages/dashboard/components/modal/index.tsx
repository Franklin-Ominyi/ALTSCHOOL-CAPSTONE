import React, { useContext, useRef } from "react";
import styles from "./Modal.module.css";
import { AppContext } from "../../../../contexts/AppContext";
import { QRCodeSVG } from "qrcode.react";
import html2canvas from "html2canvas";

const Modal: React.FC = () => {
	const qrCodeRef = useRef<any>(null);
	const appContext = useContext(AppContext);
	const selectedQrCode = appContext.selectedQrCode;
	const setQrCodeModalActive = appContext.setQrCodeModalActive;

	const handleDownload = () => {
		html2canvas(qrCodeRef.current).then((canvas) => {
			const url = canvas.toDataURL("image/png");
			const link = document.createElement("a");
			link.href = url;
			link.download = "qrcode.png";
			link.click();
		});
	};

	return (
		<div className='relative'>
			<div className='fixed opacity-70  bg-gray-700 z-40 h-full w-full'></div>
			<div
				className={`fixed z-50 opacity-100 min-w-fit w-full pb-12 overflow-y-scroll py-2 min-h-fit rounded-3xl flex flex-col gap-6  bg-white shadow-md ${styles.modalContent} lg:w-2/5 lg:h-3/4 lg:pb-10`}
			>
				<p className='text-right mt-2 mr-2'>
					<i
						className='fa fa-2x fa-times-circle cursor-pointer hover:text-errorRed'
						aria-hidden='true'
						onClick={() => setQrCodeModalActive(false)}
					></i>
				</p>
				<div className='flex flex-col items-center justify-center'>
					<div>
						<p className='font-bold text-lg text-center'>Scan Me!</p>
						<div ref={qrCodeRef}>
							<QRCodeSVG value={`${selectedQrCode}`} includeMargin size={300} />
						</div>
					</div>

					<div>
						<button
							className='p-3 mt-4 cursor-pointer flex items-center gap-2 bg-primary400 text-white text-lg font-semibold rounded-2xl border-2 hover:bg-primary300 focus:outline-none lg:p-4'
							onClick={handleDownload}
						>
							Download <i className='fa fa-download' aria-hidden='true'></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
