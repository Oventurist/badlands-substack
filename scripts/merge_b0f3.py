# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from merge_helper import merge

W = 'C:/Users/14053/hermes-projects/badlands-substack/wiki/'
RAW = 'raw/badlands-news-brief-b0f.md'
REF = 'Badlands Brief — "Badlands News Brief: Manufactured Intelligence & Major Victories", URL: https://badlands.substack.com/p/badlands-news-brief-b0f'

S = {}

S['entities/jerome-powell.md'] = u"""## "Too Late" and the GENIUS Act

Badlands commentary in July 2025 reinterpreted President [[donald-trump|Donald Trump]]'s long-running nickname for Powell — "Too Late," used for months in the context of interest rate policy — in light of the [[genius-act|GENIUS Act]], signed into law on July 18, 2025.[{n}] The argument held that fully reserved, Treasury-backed U.S. stablecoins would stabilize and decentralize the dollar, rendering the money-printing function of central banks obsolete, and that Powell and his central banking counterparts had been "too late to stop the one move they never saw coming."[{n}] The same commentary declared that central bank digital currencies were "dead."[{n}]"""

S['entities/ftx.md'] = u"""## FTT surge on false pardon report (July 2025)

On Saturday, July 19, 2025, FTX's native token FTT rose about 43 percent to $1.30 after false reports circulated that founder [[sam-bankman-fried|Sam Bankman-Fried]] had received a pardon from President [[donald-trump|Donald Trump]]; no such grant appeared on the Justice Department's clemency website.[{n}] Bankman-Fried was pursuing a pardon with support from his parents, Joseph Bankman and Barbara Fried, while serving a 25-year sentence for fraud connected to the exchange's collapse.[{n}]"""

S['entities/shinzo-abe.md'] = u"""## Legacy invoked after the 2025 Japanese upper house election

Following the July 2025 Japanese upper house election, in which the populist party [[sanseito|Sanseito]] won 14 seats on a "Japanese First" platform while Prime Minister [[shigeru-ishiba|Shigeru Ishiba]]'s coalition lost its majority, Badlands commentary declared that "the spirit of Shinzo Abe lives on."[{n}] The commentary treated Abe as the emblem of a populist-nationalist current that, if it swept Japan, could make the country a genuine ally of the United States rather than a postwar vassal state, and joked that nothing would please the author more than to learn Abe was alive in witness protection.[{n}]"""

for rel, sec in S.items():
    merge(W + rel, RAW, REF, sec)
