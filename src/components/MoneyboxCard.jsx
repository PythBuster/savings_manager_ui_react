import {Box, Card, CardContent, CardHeader, Typography} from "@mui/material";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
function MoneyboxCard({name, priority, savingsAmountStr, savingsTargetStr, balanceStr}) {
    const { t, i18n: {changeLanguage, language} } = useTranslation();

    return (
        <Box sx={{
            minWidth: 275,
            border: `1px solid`,
            borderColor: 'divider',
            borderRadius: 2,
        }}>

            <Card variant="outlined">
                <CardContent style={{ textAlign: 'center', verticalAlign: 'top' }}>
                    <CardHeader title={name} sx={{
                        paddingBottom: 0,
                        '& .MuiCardHeader-title': {
                            fontWeight: 'bold',
                        },
                    }}/>

                    <Box style={{
                        textAlign: 'center',
                        verticalAlign: 'top',
                        padding: 0,
                        margin: 0,
                    }}>

                        <Typography sx={{
                            color: 'text.secondary', mb: 2 }}>
                            {t('priority')}: {priority}
                        </Typography>


                        <Box sx={{
                            pl: 7,
                            pr: 7,
                            display: 'flex',
                            justifyContent: 'center',
                            color: 'success.main', // colorize 'blue'
                        }}>
                            <Typography>{t('savings-amount')}:</Typography>&nbsp;
                            <Typography>{savingsAmountStr}</Typography>
                        </Box>

                        <Box sx={{
                            mb: 2,
                            pl: 7,
                            pr: 7,
                            display: 'flex',
                            justifyContent: 'center',
                            color: 'info.main', // colorize 'blue'
                        }}>
                            <Typography>{t('savings-target')}:</Typography>&nbsp;
                            <Typography>{savingsTargetStr}</Typography>
                        </Box>

                        <Box sx={{
                            pl: 7,
                            pr: 7,
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 2
                        }}>
                            <Typography sx={{
                                fontWeight: 'bold'
                            }}>{balanceStr}</Typography>
                        </Box>
                    </Box>

                </CardContent>
            </Card>

        </Box>
    )
}

export default MoneyboxCard