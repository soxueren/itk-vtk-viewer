import style from '../ItkVtkViewer.module.css';

import resetCameraIcon from '../icons/reset-camera.svg';

function createResetCameraButton(
  store,
  contrastSensitiveStyle,
  mainUIRow
) {
  const viewerDOMId = store.id;
  const resetCameraButton = document.createElement('div');
  resetCameraButton.innerHTML = `<input id="${viewerDOMId}-resetCameraButton" type="checkbox" class="${
    style.toggleInput
  }" checked><label itk-vtk-tooltip itk-vtk-tooltip-bottom itk-vtk-tooltip-content="Reset camera [r]" class="${
    contrastSensitiveStyle.invertibleButton
  } ${style.resetCameraButton} ${
    style.toggleButton
  }" for="${viewerDOMId}-resetCameraButton">${resetCameraIcon}</label>`;
  function resetCamera() {
    store.itkVtkView.resetCamera();
  }
  resetCameraButton.addEventListener('change', (event) => {
    event.preventDefault();
    event.stopPropagation();
    resetCamera();
  });
  resetCameraButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    resetCamera();
  });
  mainUIRow.appendChild(resetCameraButton);
}

export default createResetCameraButton;
