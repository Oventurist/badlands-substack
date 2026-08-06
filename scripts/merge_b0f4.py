# -*- coding: utf-8 -*-
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from merge_helper import merge

W = 'C:/Users/14053/hermes-projects/badlands-substack/wiki/'
RAW = 'raw/badlands-news-brief-b0f.md'
REF = 'Badlands Brief — "Badlands News Brief: Manufactured Intelligence & Major Victories", URL: https://badlands.substack.com/p/badlands-news-brief-b0f'

sec = u"""## July 2025 disclosures on the October 2021 memo

On Friday, July 18, 2025, [[america-first-legal|America First Legal]] released documents it said conclusively proved that Garland's October 4, 2021 memo labeling concerned parents as "domestic terrorists" was a political operation of weaponized government rather than lawful enforcement of federal law by the [[department-of-justice|Department of Justice]].[{n}] The records, obtained after three and a half years of effort, were said to expose the Biden [[white-house|White House]]'s involvement in pushing a weaponized DOJ, as well as dissent from career attorneys in the Civil Rights Division who warned there was no federal authority or legal basis to target parents whose speech was protected by the First Amendment.[{n}]

The disclosures allowed the group to complete the timeline between the [[national-school-boards-association|National School Boards Association]] memo — which had urged the DOJ to use the Patriot Act against parents objecting to mask mandates and Critical Race Theory — and the publication of the [[garland-memo|October 4 memo]], confirming AFL's October 2021 prediction that political leadership had circumvented and disregarded the advice of department lawyers.[{n}]"""

merge(W + 'entities/merrick-garland.md', RAW, REF, sec)
