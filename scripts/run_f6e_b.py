# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, r'C:/Users/14053/hermes-projects/badlands-substack/scripts')
from merge_f6e import run

U = []
def a(slug, title, body):
    U.append((slug, '## %s\n\n%s' % (title, body)))

a('congress', 'Epstein files vote and Ukraine support criticism (November 2025)',
 'The House and Senate both voted on Tuesday, November 18, 2025 to publicly release the government\'s files on [[jeffrey-epstein|Jeffrey Epstein]], sending the [[epstein-files-transparency-act|Epstein Files Transparency Act]] to President [[donald-trump|Donald Trump]]\'s desk for signature the following day.[{N}] Separately, Badlands commentary on revelations of Ukrainian government corruption asked what the affair says about "the US Congress — both Republican and Democrat — who have ardently supported Ukraine for the past 3+ years."[{N}]')

a('department-of-justice', 'Ordered release of the Epstein files (November 2025)',
 'Legislation signed by President [[donald-trump|Donald Trump]] on November 19, 2025 ordered the Justice Department to release documents from its long-running investigation into sex offender [[jeffrey-epstein|Jeffrey Epstein]].[{N}] Attorney General [[pam-bondi|Pam Bondi]] said the department would release the files within 30 days, as required by the [[epstein-files-transparency-act|Epstein Files Transparency Act]], which covers internal communications and investigative materials relating to Epstein and [[ghislaine-maxwell|Ghislaine Maxwell]] but permits redaction of records that would jeopardize an active federal investigation or ongoing prosecution.[{N}]')

a('epstein-files', 'Statutory release mandate (November 2025)',
 'Congress voted on November 18, 2025 to require public release of the Epstein files, and President [[donald-trump|Donald Trump]] signed the [[epstein-files-transparency-act|Epstein Files Transparency Act]] the next day, ordering the [[department-of-justice|Justice Department]] to produce documents from its long-running investigation within 30 days.[{N}] Attorney General [[pam-bondi|Pam Bondi]] retains authority to redact records in specific instances, including material that "would jeopardize an active federal investigation or ongoing prosecution," a provision that drew immediate scrutiny.[{N}]')

a('saudi-arabia', 'Washington visit and investment forum (November 2025)',
 'Crown Prince [[mohammed-bin-salman|Mohammed bin Salman]]\'s November 2025 visit to Washington produced an Oval Office meeting, a black-tie [[white-house|White House]] dinner attended by leading American tech, media and sports figures, and the [[saudi-us-investment-forum|US-Saudi Investment Forum]] at the Kennedy Center, hosted by the Ministry of Investment of Saudi Arabia under the theme "Leadership for Growth: Strengthening the Saudi-US Economic Partnership."[{N}] President [[donald-trump|Donald Trump]] said $270 billion of Saudi investment had already been negotiated and locked in for the US economy, the first portion of a promised $1 trillion.[{N}] The crown prince also asked Trump to help end the war in [[sudan|Sudan]], and Trump said he would work with Saudi Arabia, the United Arab Emirates and Egypt toward that end.[{N}]')



run(U)
