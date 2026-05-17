import {useState} from 'react';

import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const getPeriodLabel = (periodNumber: number) => {
  const periodLabels: Record<number, string> = {
    1: 'Первый период',
    2: 'Второй период',
    3: 'Третий период',
    4: 'Четвёртый период',
    5: 'Пятый период',
    6: 'Шестой период',
    7: 'Седьмой период',
    8: 'Восьмой период',
    9: 'Девятый период',
    10: 'Десятый период',
  };

  return periodLabels[periodNumber] ?? `${periodNumber} период`;
};

const BootstrapDialog = styled(Dialog)(({theme}) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.78)',
    backdropFilter: 'blur(3px)',
  },

  '& .MuiDialog-paper': {
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '820px',
    width: '100%',
    borderRadius: 0,
    color: '#e8edf2',
    background:
      'radial-gradient(circle at 20% 0%, rgba(255, 43, 76, 0.2), transparent 34%), ' +
      'radial-gradient(circle at 85% 20%, rgba(41, 126, 255, 0.2), transparent 34%), ' +
      'linear-gradient(135deg, #090b10 0%, #111723 48%, #07080b 100%)',
    border: '2px solid rgba(255, 43, 76, 0.75)',
    boxShadow:
      '0 0 35px rgba(255, 43, 76, 0.25), 0 0 70px rgba(41, 126, 255, 0.16)',
  },

  '& .MuiDialog-paper::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background:
      'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), ' +
      'linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
    backgroundSize: '28px 28px',
    opacity: 0.28,
  },


  '& .MuiDialog-paper::after': {
    content: '"★"',
    position: 'absolute',
    right: '28px',
    bottom: '10px',
    fontSize: '120px',
    lineHeight: 1,
    color: 'rgba(255, 43, 76, 0.08)',
    pointerEvents: 'none',
  },

  '& .MuiDialogTitle-root': {
    position: 'relative',
    padding: theme.spacing(3, 7, 2.5, 3),
    borderBottom: '1px solid rgba(255, 43, 76, 0.45)',
  },

  '& .MuiDialogContent-root': {
    position: 'relative',
    padding: theme.spacing(3),
    borderColor: 'rgba(127, 174, 255, 0.24)',
    background: 'rgba(5, 7, 12, 0.55)',

    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(255, 59, 88, 0.85) rgba(8, 10, 16, 0.65)',

    '&::-webkit-scrollbar': {
      width: '4px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'rgba(8, 10, 16, 0.65)',
      borderLeft: '1px solid rgba(127, 174, 255, 0.18)',
    },

    '&::-webkit-scrollbar-thumb': {
      background:
        'linear-gradient(180deg, rgba(255, 59, 88, 0.95), rgba(127, 174, 255, 0.75))',
      borderRadius: '0',
      boxShadow: '0 0 8px rgba(255, 59, 88, 0.45)',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background:
        'linear-gradient(180deg, rgba(255, 88, 112, 1), rgba(150, 195, 255, 0.95))',
    },
  },

  '& .MuiTypography-root': {
    color: 'rgba(232, 237, 242, 0.9)',
    fontFamily: '"Roboto Condensed", "Arial Narrow", Arial, sans-serif',
    fontSize: '18px',
    lineHeight: 1.65,
    letterSpacing: '0.02em',
  },

  '& .MuiDialogActions-root': {
    position: 'relative',
    padding: theme.spacing(2, 3, 3),
    borderTop: '1px solid rgba(255, 43, 76, 0.35)',
    background: 'rgba(7, 9, 14, 0.72)',
  },
}));

const TitleYears = styled(Box)({
  color: '#ff3b58',
  fontFamily: '"Oswald", "Arial Narrow", Arial, sans-serif',
  fontSize: '64px',
  fontWeight: 900,
  lineHeight: 1,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  textShadow: '0 0 22px rgba(255, 43, 76, 0.55)',
});

const PeriodLabel = styled(Box)({
  marginTop: '14px',
  color: '#7faeff',
  fontFamily: '"Oswald", "Arial Narrow", Arial, sans-serif',
  fontSize: '22px',
  fontWeight: 800,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  textShadow: '0 0 14px rgba(127, 174, 255, 0.45)',
});

const SovietButton = styled(Button)({
  borderRadius: 0,
  padding: '9px 22px',
  color: '#ffffff',
  backgroundColor: '#b51f32',
  border: '1px solid #ff4a63',
  fontFamily: '"Oswald", "Arial Narrow", Arial, sans-serif',
  fontWeight: 800,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  boxShadow: '0 0 18px rgba(255, 43, 76, 0.3)',

  '&:hover': {
    backgroundColor: '#e02c45',
    borderColor: '#ff7587',
    boxShadow: '0 0 26px rgba(255, 43, 76, 0.48)',
  },
});

const CloseButton = styled(IconButton)({
  position: 'absolute',
  right: 14,
  top: 14,
  zIndex: 2,
  color: '#ff3b58',
  borderRadius: 0,
  border: '1px solid rgba(255, 43, 76, 0.55)',
  backgroundColor: 'rgba(5, 7, 12, 0.78)',

  '&:hover': {
    color: '#ffffff',
    backgroundColor: '#b51f32',
    borderColor: '#ff4a63',
  },
});

const CarouselWrapper = styled(Box)({
  position: 'relative',
  marginBottom: '24px',
  padding: '18px',
  border: '1px solid rgba(255, 43, 76, 0.45)',
  background:
    'linear-gradient(135deg, rgba(255, 43, 76, 0.12), rgba(41, 126, 255, 0.08))',
  boxShadow: 'inset 0 0 28px rgba(0, 0, 0, 0.45)',
});

const PosterFrame = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '360px',
  backgroundColor: 'rgba(0, 0, 0, 0.45)',
  border: '1px solid rgba(127, 174, 255, 0.28)',
  overflow: 'hidden',
});

const PosterImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
  cursor: 'zoom-in',
  filter: 'contrast(1.08) saturate(1.08)',
  boxShadow: '0 0 28px rgba(0, 0, 0, 0.7)',
  transition: 'transform 0.2s ease, filter 0.2s ease',

  '&:hover': {
    transform: 'scale(1.02)',
    filter: 'contrast(1.15) saturate(1.15)',
  },
});

const CarouselArrow = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  width: '42px',
  height: '42px',
  borderRadius: 0,
  color: '#ffffff',
  backgroundColor: 'rgba(181, 31, 50, 0.82)',
  border: '1px solid rgba(255, 74, 99, 0.9)',
  boxShadow: '0 0 16px rgba(255, 43, 76, 0.35)',

  '&:hover': {
    backgroundColor: '#e02c45',
  },
});

const PosterCounter = styled(Box)({
  marginTop: '12px',
  color: '#7faeff',
  fontFamily: '"Oswald", "Arial Narrow", Arial, sans-serif',
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.16em',
  textAlign: 'center',
  textTransform: 'uppercase',
  textShadow: '0 0 12px rgba(127, 174, 255, 0.45)',
});

const TextSection = styled(Box)({
  position: 'relative',
  marginTop: '22px',
  padding: '18px 20px',
  borderLeft: '4px solid #b51f32',
  background:
    'linear-gradient(90deg, rgba(181, 31, 50, 0.18), rgba(41, 126, 255, 0.06))',
  boxShadow: 'inset 0 0 22px rgba(0, 0, 0, 0.35)',
});

const TextSectionTitle = styled(Typography)({
  marginBottom: '10px',
  color: '#ff3b58 !important',
  fontFamily: '"Oswald", "Arial Narrow", Arial, sans-serif !important',
  fontSize: '22px !important',
  fontWeight: '800 !important',
  letterSpacing: '0.08em !important',
  textTransform: 'uppercase',
  textShadow: '0 0 14px rgba(255, 43, 76, 0.45)',
});

const TextSectionBody = styled(Typography)({
  whiteSpace: 'pre-line',
});

const FullscreenPosterDialog = styled(Dialog)({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    backdropFilter: 'blur(4px)',
  },

  '& .MuiDialog-paper': {
    position: 'relative',
    maxWidth: 'none',
    width: '100vw',
    height: '100vh',
    maxHeight: 'none',
    margin: 0,
    borderRadius: 0,
    background:
      'radial-gradient(circle at center, rgba(255, 43, 76, 0.11), transparent 42%), #030407',
    boxShadow: 'none',
    overflow: 'hidden',
  },
});

const FullscreenPosterImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  padding: '40px',
  boxSizing: 'border-box',
  cursor: 'zoom-out',
});

const FullscreenCloseButton = styled(IconButton)({
  position: 'fixed',
  right: 24,
  top: 24,
  zIndex: 10,
  color: '#ffffff',
  borderRadius: 0,
  backgroundColor: 'rgba(181, 31, 50, 0.9)',
  border: '1px solid rgba(255, 74, 99, 0.9)',
  boxShadow: '0 0 22px rgba(255, 43, 76, 0.45)',

  '&:hover': {
    backgroundColor: '#e02c45',
  },
});

interface CustomizedDialogs {
  setOpen: (value: boolean) => void;
  open: boolean;
  title: string;
  periodNumber: number;
  posterUrls?: string[];
  historyText: string;
  conclusionText: string;
}

export default function Modal({
                                setOpen,
                                open,
                                title,
                                periodNumber,
                                posterUrls = [],
                                historyText,
                                conclusionText,
                              }: CustomizedDialogs) {
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);
  const [previewPosterUrl, setPreviewPosterUrl] = useState<string | null>(null);

  const hasPosters = posterUrls.length > 0;
  const currentPosterUrl = posterUrls[currentPosterIndex];

  const handleClose = () => {
    setOpen(false);
  };

  const handlePreviewClose = () => {
    setPreviewPosterUrl(null);
  };

  const handlePrevPoster = () => {
    setCurrentPosterIndex((prev) =>
      prev === 0 ? posterUrls.length - 1 : prev - 1
    );
  };

  const handleNextPoster = () => {
    setCurrentPosterIndex((prev) =>
      prev === posterUrls.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title">
          <TitleYears>
            {title}
          </TitleYears>

          <PeriodLabel>
            {getPeriodLabel(periodNumber)}
          </PeriodLabel>
        </DialogTitle>

        <CloseButton aria-label="close" onClick={handleClose}>
          <CloseIcon/>
        </CloseButton>

        <DialogContent dividers>
          {hasPosters && (
            <CarouselWrapper>
              {posterUrls.length > 1 && (
                <CarouselArrow
                  onClick={handlePrevPoster}
                  sx={{left: 28}}
                  aria-label="previous poster"
                >
                  <ArrowBackIosNewIcon fontSize="small"/>
                </CarouselArrow>
              )}

              <PosterFrame>
                <PosterImage
                  src={currentPosterUrl}
                  alt={`Плакат ${currentPosterIndex + 1}`}
                  onClick={() => setPreviewPosterUrl(currentPosterUrl)}
                />
              </PosterFrame>

              {posterUrls.length > 1 && (
                <CarouselArrow
                  onClick={handleNextPoster}
                  sx={{right: 28}}
                  aria-label="next poster"
                >
                  <ArrowForwardIosIcon fontSize="small"/>
                </CarouselArrow>
              )}

              <PosterCounter>
                Нажмите на плакат для просмотра · {currentPosterIndex + 1} /{' '}
                {posterUrls.length}
              </PosterCounter>
            </CarouselWrapper>
          )}

          <TextSection>
            <TextSectionTitle>
              Историческая справка
            </TextSectionTitle>

            <TextSectionBody>
              {historyText}
            </TextSectionBody>
          </TextSection>

          <TextSection>
            <TextSectionTitle>
              Выводы работы
            </TextSectionTitle>

            <TextSectionBody>
              {conclusionText}
            </TextSectionBody>
          </TextSection>
        </DialogContent>

        <DialogActions>
          <SovietButton autoFocus onClick={handleClose}>
            Понятно
          </SovietButton>
        </DialogActions>
      </BootstrapDialog>

      <FullscreenPosterDialog
        open={Boolean(previewPosterUrl)}
        onClose={handlePreviewClose}
      >
        <FullscreenCloseButton
          aria-label="close fullscreen poster"
          onClick={handlePreviewClose}
        >
          <CloseIcon/>
        </FullscreenCloseButton>

        {previewPosterUrl && (
          <FullscreenPosterImage
            src={previewPosterUrl}
            alt="Плакат в полноэкранном режиме"
            onClick={handlePreviewClose}
          />
        )}
      </FullscreenPosterDialog>
    </>
  );
}