window.RESEARCH_DATA = {
  featured: [
    {
      id: 'sarcasmsense', year: '2026', kind: 'Multimodal NLP', role: 'First author',
      title: 'SarcasmSense', subtitle: 'Multitask multimodal understanding of sarcasm, sentiment shifts, and rhetorical targets in political reaction videos.',
      problem: 'Sarcasm in spontaneous video is rarely expressed in text alone; tone, facial behavior, and semantic incongruity often carry the decisive evidence.',
      method: 'DeBERTa text features, Wav2Vec 2.0 + CNN–LSTM audio features, TimeSformer/OpenFace visual cues, Multi-Head Cross-Attention, and Gated Modality Fusion feed three related prediction tasks.',
      result: 'The paper reports F1 scores of 93.2% for sarcasm detection, 88.5% for sentiment-shift detection, and 85.0% for rhetorical-target identification on a newly curated dataset of 6,000+ utterances.',
      tags: ['Multimodal', 'DeBERTa', 'Wav2Vec2', 'TimeSformer', 'Cross-attention'],
      doi: 'https://doi.org/10.1109/ACCESS.2026.3674402',
      image: 'https://www.researchgate.net/publication/402464595/figure/download/fig1/AS%3A11431282075933121%401776620221530/Overview-of-the-SarcasmSense-framework.png',
      imageAlt: 'Figure 1 from SarcasmSense showing political reaction video inputs and the three prediction tasks',
      figureSource: 'https://www.researchgate.net/figure/Overview-of-the-SarcasmSense-framework_fig1_402464595',
      flow: ['Text / audio / video', 'Modality encoders', 'MHCA + GMF', 'Three task heads']
    },
    {
      id: 'mran-vqa', year: '2025', kind: 'Vision-Language', role: 'First author',
      title: 'MRAN-VQA', subtitle: 'Recursive multimodal attention for visual question answering with hierarchical visual-language fusion.',
      problem: 'VQA systems must repeatedly align a question with the parts of an image that matter, rather than relying on a single static fusion step.',
      method: 'The work combines ViT and BERT representations with recursive visual/text attention and hierarchical low-, mid-, and high-level fusion, together with attention-grounding analysis.',
      result: 'The paper reports performance across VQA v2, CLEVR, and BanglaVQA, including 75.6% on VQA v2, 96.1% on CLEVR, and 72% on BanglaVQA.',
      tags: ['VQA', 'ViT', 'BERT', 'Recursive attention', 'Grounding'],
      doi: 'https://doi.org/10.1016/j.jestch.2025.102232',
      figureSource: 'https://www.sciencedirect.com/science/article/pii/S2215098625002873',
      flow: ['Image + question', 'ViT + BERT', 'Recursive attention', 'Hierarchical fusion', 'Answer']
    },
    {
      id: 'zero-bertxgb', year: '2025', kind: 'NLP / Evidence Synthesis', role: 'First author',
      title: 'Zero-BertXGB', subtitle: 'Automating abstract screening for systematic reviews with embeddings, zero-shot signals, and classical ML.',
      problem: 'Abstract screening is a major manual bottleneck in systematic reviews, especially when datasets are imbalanced and topic-specific.',
      method: 'The study evaluates multiple embeddings and classifiers, then combines transformer-based zero-shot classification with a downstream XGBoost-centered screening pipeline across five datasets.',
      result: 'Reported accuracies range from 85.7% to 99.3% across the five evaluation datasets, with the strongest results varying by dataset and embedding configuration.',
      tags: ['Systematic review', 'Zero-shot', 'XGBoost', 'Embeddings', 'NLP'],
      doi: 'https://doi.org/10.1109/ACCESS.2025.3531778',
      figureSource: 'https://www.researchgate.net/publication/387948413_Zero-BertXGB_An_Empirical_Technique_for_Abstract_Classification_in_Systematic_Reviews',
      flow: ['Candidate abstracts', 'Zero-shot filter', 'Embedding', 'XGBoost', 'Include / exclude']
    },
    {
      id: 'sumgpt', year: '2025', kind: 'Medical Vision-Language', role: 'Co-author',
      title: 'SumGPT', subtitle: 'Multimodal radiology-report summarization by combining visual evidence with transformer-based text generation.',
      problem: 'Radiology summarization must condense specialized findings without losing clinically important information while also making use of the associated medical image.',
      method: 'The proposed system combines a Vision Transformer with T5, aligns visual and textual representations, and uses cross-modal fusion to generate concise report summaries; the paper compares this design against multiple multimodal baselines.',
      result: 'On the study split of 1,952 training and 488 test image-report pairs, the paper reports ROUGE-1 0.8514, ROUGE-2 0.8471, ROUGE-L 0.8514, and BLEU 0.8470 for SumGPT.',
      tags: ['Radiology', 'ViT', 'T5', 'Multimodal summarization', 'Medical AI'],
      doi: 'https://doi.org/10.1109/ACCESS.2025.3528335',
      figureSource: 'https://www.researchgate.net/publication/387762555_SumGPT_A_Multimodal_Framework_for_Radiology_Report_Summarization_to_Improve_Clinical_Performance',
      flow: ['Radiology image + report', 'ViT + T5', 'Cross-modal fusion', 'Decoder', 'Concise summary']
    },
    {
      id: 'gastrovrg', year: '2024', kind: 'Medical Vision', role: 'First author',
      title: 'GastroVRG', subtitle: 'Transfer-feature learning for early gastrointestinal screening from endoscopic imagery.',
      problem: 'Endoscopic image classification needs robust representations when clinically useful datasets are modest in size and visually heterogeneous.',
      method: 'Transfer features from pretrained visual networks are combined with machine-learning classifiers, including ensemble-style feature engineering, for esophagitis and polyp recognition.',
      result: 'The paper reports very high cross-validated performance on the evaluated Kvasir subset and studies the effect of several transfer-feature/classifier combinations.',
      tags: ['Medical imaging', 'Transfer learning', 'Endoscopy', 'Feature fusion'],
      doi: 'https://doi.org/10.1016/j.iswa.2024.200399',
      figureSource: 'https://www.researchgate.net/publication/381469455_Enhancing_Early_Screening_in_Gastrointestinal_Health_via_Advanced_Transfer_Features',
      flow: ['Endoscopy image', 'Transfer features', 'Feature engineering', 'Classifier', 'Screening label']
    },
    {
      id: 'cdk', year: '2024', kind: 'Medical Vision', role: 'First author',
      title: 'CDK for osteoarthritis', subtitle: 'Transfer-feature and probabilistic feature engineering for early knee osteoarthritis detection.',
      problem: 'Knee osteoarthritis grading from radiographs is difficult when subtle structural changes overlap across classes.',
      method: 'The framework combines deep transfer features with probabilistic outputs from multiple conventional classifiers to construct a richer representation before final classification.',
      result: 'The paper evaluates the method on 3,615 knee X-rays and reports strong performance for the proposed feature-engineering pipeline.',
      tags: ['X-ray', 'Osteoarthritis', 'Transfer features', 'Ensemble learning'],
      doi: 'https://doi.org/10.1016/j.jpi.2024.100382',
      flow: ['Knee X-ray', 'Deep features', 'Probabilistic ML features', 'Fusion', 'OA class']
    },
    {
      id: 'rknd', year: '2024', kind: 'Sensing / ML', role: 'First author',
      title: 'RKnD', subtitle: 'Smartphone-sensor feature engineering for driver-behavior classification.',
      problem: 'Driving style classification from mobile motion sensors must separate subtle temporal patterns under noisy real-world measurements.',
      method: 'Random Forest, K-nearest-neighbor, and Decision Tree predictions are used as probabilistic features, with data balancing and downstream classification to distinguish slow, normal, and aggressive driving.',
      result: 'The study reports 99.63% accuracy in its evaluated setting and compares the proposed feature construction with conventional baselines.',
      tags: ['Smartphone sensing', 'Driver behavior', 'Feature engineering', 'ML'],
      doi: 'https://doi.org/10.1109/ACCESS.2024.3397725',
      figureSource: 'https://www.semanticscholar.org/paper/Elevating-Driver-Behavior-Understanding-With-RKnD%3A-Islam-Rony/5c9dbb9dd71edc2116d86c3ece4708df508571d6/figure/0',
      flow: ['Motion sensors', 'RF / KNN / DT', 'Probabilistic features', 'Classifier', 'Driving style']
    },
    {
      id: 'medigpt', year: '2024', kind: 'Medical NLP', role: 'Co-author',
      title: 'MediGPT', subtitle: 'Prompting and LLM paradigms for medical text classification across multiple datasets.',
      problem: 'Medical text classifiers often require labeled domain data and retraining, while real clinical text varies across topics and languages.',
      method: 'The study compares conventional ML and pretrained language-model pipelines with ChatGPT-based zero-, one-, and few-shot strategies, QA-based similarity prompts, and prompt design variants.',
      result: 'Across four medical-text datasets, the paper reports gains for the proposed MediGPT prompting strategies and analyzes where LLM-based classification is competitive with conventional approaches.',
      tags: ['Medical NLP', 'LLM', 'Prompting', 'Few-shot', 'Classification'],
      doi: 'https://doi.org/10.1109/ACCESS.2024.3428918',
      figureSource: 'https://www.researchgate.net/publication/382068137_MediGPT_Exploring_Potentials_of_Conventional_and_Large_Language_Models_on_Medical_Data',
      flow: ['Medical text', 'Prompt strategy', 'LLM / PLM', 'Answer alignment', 'Medical class']
    },
    {
      id: 'memesvita', year: '2024', kind: 'Multimodal', role: 'Co-author',
      title: 'MemesViTa', subtitle: 'Vision-language fusion for troll-meme identification.',
      problem: 'Troll memes can hide harmful intent in the interaction between image and text, making single-modality moderation brittle.',
      method: 'Vision Transformer image features are fused with DeBERTa text representations and compared with visual, textual, multimodal, zero-shot, and few-shot baselines.',
      result: 'The proposed ViT + DeBERTa system reports 94.287% accuracy and 95.82% F1 on the study dataset.',
      tags: ['Multimodal', 'ViT', 'DeBERTa', 'Memes', 'Content moderation'],
      doi: 'https://doi.org/10.1109/ACCESS.2024.3505614',
      flow: ['Meme image', 'ViT', 'DeBERTa', 'Multimodal fusion', 'Troll / non-troll']
    }
  ],
  publications: [
    {year:'2026',type:'journal',title:'SarcasmSense: A Novel Multitask Learning Framework for Vlog-Based Political Sarcasm and Irony Detection',venue:'IEEE Access, 14:52118–52138',authors:'M. S. Islam, M. J. U. Chowdhury, M. M. U. Tareq, T. Ahmed, M. Aktarujjaman, M. S. Uddin, et al.',summary:'Multimodal multitask learning for sarcasm, sentiment-shift, and rhetorical-target recognition in political reaction videos using text, audio, and visual cues.',url:'https://doi.org/10.1109/ACCESS.2026.3674402',project:'sarcasmsense',tags:['multimodal','NLP','sarcasm']},
    {year:'2025',type:'journal',title:'MRAN-VQA: Multimodal Recursive Attention Network for Visual Question Answering',venue:'Engineering Science and Technology, an International Journal, 72:102232',authors:'M. S. Islam, M. A. T. Rony, M. M. H. Sarker, M. K. B. Bhuiyan, M. Saib, et al.',summary:'A VQA framework that repeatedly aligns language and visual evidence through recursive attention and hierarchical multimodal fusion.',url:'https://doi.org/10.1016/j.jestch.2025.102232',project:'mran-vqa',tags:['VLM','VQA','attention']},
    {year:'2025',type:'journal',title:'Zero-BertXGB: An Empirical Technique for Abstract Classification in Systematic Reviews',venue:'IEEE Access, 13:18418–18440',authors:'M. S. Islam, M. A. T. Rony, M. R. Hossain, S. Alshathri, W. El-Shafai',summary:'Benchmarks embeddings, ML, and LLM approaches for systematic-review abstract screening and develops a hybrid zero-shot + XGBoost pipeline.',url:'https://doi.org/10.1109/ACCESS.2025.3531778',project:'zero-bertxgb',tags:['NLP','systematic review','XGBoost']},
    {year:'2025',type:'journal',title:'SumGPT: A Multimodal Framework for Radiology Report Summarization to Improve Clinical Performance',project:'sumgpt',venue:'IEEE Access, 13:15929–15945',authors:'T. Sultan, M. A. T. Rony, M. S. Islam, S. Alshathri, W. El-Shafai',summary:'Fuses radiology-image representations with T5-style language generation to summarize imaging reports and compares several multimodal baselines.',url:'https://doi.org/10.1109/ACCESS.2025.3528335',tags:['multimodal','radiology','summarization']},
    {year:'2024',type:'journal',title:'GastroVRG: Enhancing Early Screening in Gastrointestinal Health via Advanced Transfer Features',venue:'Intelligent Systems with Applications, 23:200399',authors:'M. S. Islam, M. A. T. Rony, T. Sultan',summary:'Investigates transfer-feature engineering and conventional classifiers for endoscopic-image screening of gastrointestinal conditions.',url:'https://doi.org/10.1016/j.iswa.2024.200399',project:'gastrovrg',tags:['medical vision','transfer learning']},
    {year:'2024',type:'journal',title:'CDK: A high-performance transfer feature technique for early detection of osteoarthritis',venue:'Journal of Pathology Informatics, 15:100382',authors:'M. S. Islam, M. A. T. Rony',summary:'Combines deep transfer representations with probabilistic classifier features for knee-radiograph osteoarthritis recognition.',url:'https://doi.org/10.1016/j.jpi.2024.100382',project:'cdk',tags:['medical vision','x-ray','ensemble']},
    {year:'2024',type:'journal',title:'Elevating Driver Behavior Understanding With RKnD',venue:'IEEE Access, 12:65780–65798',authors:'M. S. Islam, M. A. T. Rony, S. Alfarhood, D. Che',summary:'Uses smartphone motion sensing and probabilistic feature engineering from multiple classical models to classify driving behavior.',url:'https://doi.org/10.1109/ACCESS.2024.3397725',project:'rknd',tags:['sensing','ML','driver behavior']},
    {year:'2024',type:'journal',title:'Navigating the Global Stock Market: Correlation, Prediction, and External Factors',venue:'Iran Journal of Computer Science, 7(3):397–422',authors:'M. S. Islam, M. A. T. Rony',summary:'Studies relationships across global stock markets, predictive modeling, and how external variables relate to market behavior.',url:'https://doi.org/10.1007/s42044-024-00177-w',tags:['forecasting','finance','time series']},
    {year:'2024',type:'journal',title:'MediGPT: Exploring Potentials of Conventional and Large Language Models on Medical Data',venue:'IEEE Access, 12:103473–103487',authors:'M. A. T. Rony, M. S. Islam, T. Sultan, S. Alshathri, W. El-Shafai',summary:'Compares conventional medical-text classification with ChatGPT-based zero-/few-shot prompting, QA similarity, and prompt-design strategies.',url:'https://doi.org/10.1109/ACCESS.2024.3428918',project:'medigpt',tags:['medical NLP','LLM','prompting']},
    {year:'2024',type:'journal',title:'A Novel Deep Learning Approach for Forecasting Myocardial Infarction Occurrences with Time Series Patient Data',venue:'Journal of Medical Systems, 48:53',authors:'M. S. Sayed, M. A. T. Rony, M. S. Islam, et al.',summary:'Applies deep sequence modeling to longitudinal patient time-series data for myocardial-infarction occurrence forecasting.',url:'https://doi.org/10.1007/s10916-024-02076-w',tags:['health AI','time series','forecasting']},
    {year:'2024',type:'journal',title:'A Novel Deep Learning Approach for Accurate Cancer Type and Subtype Identification',venue:'IEEE Access, 12:94116–94134',authors:'J. O. Bappi, M. A. T. Rony, M. S. Islam, S. Alshathri, W. El-Shafai',summary:'Evaluates deep-learning pipelines for identifying cancer types and subtypes from a multi-cancer image dataset.',url:'https://doi.org/10.1109/ACCESS.2024.3422313',tags:['medical vision','cancer','deep learning']},
    {year:'2024',type:'journal',title:'MemesViTa: A Novel Multimodal Fusion Technique for Troll Memes Identification',venue:'IEEE Access, 12:177811–177828',authors:'T. Sultan, M. A. T. Rony, M. S. Islam, S. Aldosary, W. El-Shafai',summary:'Combines Vision Transformer and DeBERTa representations to model image–text interaction for troll-meme identification.',url:'https://doi.org/10.1109/ACCESS.2024.3505614',project:'memesvita',tags:['multimodal','memes','ViT']},
    {year:'2024',type:'journal',title:'BNVGLENET: Hypercomplex Bangla Handwriting Character Recognition with Hierarchical Class Expansion Using Convolutional Neural Networks',venue:'Natural Language Processing Journal, 7:100068',authors:'J. O. Bappi, M. A. T. Rony, M. S. Islam',summary:'A CNN-based recognition pipeline designed for the large and structurally complex class space of Bangla handwritten characters.',url:'https://doi.org/10.1016/j.nlp.2024.100068',tags:['Bangla','handwriting','CNN']},
    {year:'2023',type:'journal',title:'AE-Net: Novel Autoencoder-Based Deep Features for SQL Injection Attack Detection',venue:'IEEE Access, 11:135507–135516',authors:'N. Thalji, A. Raza, M. S. Islam, N. A. Samee, M. M. Jamjoom',summary:'Uses autoencoder-derived deep features to improve machine-learning detection of SQL-injection attacks.',url:'https://doi.org/10.1109/ACCESS.2023.3337645',tags:['cybersecurity','autoencoder','SQL injection']},
    {year:'2025',type:'conference',title:'TraSe: Architecture for Enhanced Retrieval-Augmented Generation in Bangla',venue:'LM4UC 2025 (ACL Workshop), pp. 8–15',authors:'A. S. Ipa, M. A. T. Rony, M. S. Islam',summary:'A Bangla retrieval-augmented generation architecture aimed at improving evidence retrieval and grounded response generation for an under-resourced language.',url:'https://doi.org/10.18653/v1/2025.lm4uc-1.2',tags:['Bangla','RAG','LLM']},
    {year:'2025',type:'conference',title:'MemeFusionNet: A Cross-Linguistic Multimodal Model for Identifying Troll Memes',venue:'ICCAD 2025, pp. 1–6',authors:'T. Sultan, H. A. Akbarpour, W. El-Shafai, M. Saib, M. K. B. Bhuiyan, M. S. Islam, et al.',summary:'Explores cross-lingual visual-text fusion for identifying troll memes across language and cultural settings.',url:'https://doi.org/10.1109/ICCAD64771.2025.11099160',tags:['multimodal','cross-lingual','memes']},
    {year:'2024',type:'conference',title:'BanVATLLM and BanTSS: A Multimodal Framework and a Dataset for Detecting Toxic Speech in Bangla and Bangla-English Videos',venue:'WiNLP 2024 (Phase II)',authors:'M. S. Islam, M. A. T. Rony',summary:'Introduces a Bangla/Bangla-English video toxic-speech dataset and a multimodal framework for combining linguistic and audiovisual evidence.',url:'https://openreview.net/pdf?id=A3VftpG0Xl',tags:['Bangla','multimodal','toxic speech']},
    {year:'2024',type:'conference',title:'Evaluating Large Language Models for Summarizing Bangla Texts',venue:'WiNLP 2024 (Phase II)',authors:'M. A. T. Rony, M. S. Islam',summary:'Benchmarks large language models for Bangla text summarization and examines their suitability for a comparatively under-resourced language.',url:'https://openreview.net/pdf?id=Z0zfZ4bn4x',tags:['Bangla','LLM','summarization']},
    {year:'2023',type:'conference',title:'Beyond Words: Unraveling Text Complexity with a Novel Dataset and a Classifier Application',venue:'ICCIT 2023',authors:'M. S. Islam, M. A. T. Rony, P. Saha, M. Ahammad, S. M. N. Alam, M. S. Rahman',summary:'Introduces a dataset and classification setting for modeling textual complexity beyond simple surface-level readability cues.',url:'https://doi.org/10.1109/ICCIT60459.2023.10441159',tags:['NLP','text complexity','dataset']}
  ]
};
